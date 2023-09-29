import { estaLogado } from "../../utils/validaAutorizacao";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { BoxComponent, StackComponent, TopbarComponent, TypographyComponent } from "../../components";
import { loadVagas } from "../../utils/vagas";


const JobList = ({firebaseApp}) => {
    const navigate = useNavigate();
    const [dados, setDados] = useState([]);

    const _loadVagas = async () => {
      const vagas = await loadVagas(firebaseApp);
      const novoArray = vagas.filter(item => !item.id);
      setDados(novoArray);
    }

    useEffect( () => {
        estaLogado(navigate)
        _loadVagas()
    }, [])

    return <>
          <StackComponent>
          <TopbarComponent hasArrowBack={true} hasProfile={true} profileName={"Renan de Assis (Colaborador)"}/>
          <TypographyComponent 
                    variant={'h1'} 
                    sx={{
                        textAlign: 'center',
                        fontWeight: 'bold',
                        fontSize: 30,
                        marginTop: '30px'
                    }}>
                    Vagas disponíveis
                </TypographyComponent> 


          <BoxComponent
                    component="div"
                    sx={{ 
                        backgroundColor: '#B398FF',
                        borderRadius: '10px 5px 5px 10px',
                        margin: '10px 12px 20px 12px'
                         }}
                    noValidate={true}
                    autoComplete={"off"}
                >

                <div className="json-list-container">
                {dados.map((item, index) => (
                <div key={index} className="json-item" style={{
                    backgroundColor: '#9E4CDF',
                    borderRadius: '30px',
                    width: '100%',
                    boxShadow: '0px 5px 5px rgba(0, 0, 0, 0.5)'
                }}>
                <TypographyComponent 
                    variant={'h1'} 
                    sx={{
                        textAlign: 'center',
                        fontWeight: 'bold',
                        fontSize: 27,
                        color: 'white',
                        pt: 2,
                        textShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)'
                    }}>
                    {item.nomeVaga}
                </TypographyComponent> 

                <TypographyComponent 
                    variant={'h1'} 
                    sx={{
                        textAlign: 'center',
                        fontWeight: 'bold',
                        fontSize: 20,
                        color: 'white',
                        mt: 1.5,
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
                    }}>
                    {item.salario}
                </TypographyComponent> 

                <TypographyComponent 
                    variant={'h1'} 
                    sx={{
                        textAlign: 'center',
                        fontWeight: 'bold',
                        fontSize: 20,
                        color: 'white',
                        mt: 1.5,
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
                    }}>
                    {item.telefone}
                </TypographyComponent> 
                <div style={{
                    backgroundColor: '#8524B2',
                    width: '100%',
                    height: '50px',
                    borderRadius: '0px 0px 30px 30px',
                    marginTop: '10px',
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    
                    <TypographyComponent 
                    variant={'h1'} 
                    sx={{
                        textAlign: 'center',
                        fontWeight: 'bold',
                        fontSize: 20,
                        color: 'white',
                        mt: 1.5
                    }}>
                    Visualizar Detalhes
                </TypographyComponent> 

                </div>
                </div>
                ))}
                </div>
    </BoxComponent>
          </StackComponent>
    </>
}

export default JobList;