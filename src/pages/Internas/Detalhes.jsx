import { BoxComponent, ButtonComponent, TopbarComponent, TypographyComponent } from "../../components";
import { useNavigate, useParams } from "react-router-dom";
import { loadVagas } from "../../utils/vagas";
import { estaLogado } from "../../utils/validaAutorizacao";
import { useEffect, useState } from 'react';


const Detalhes = ({firebaseApp}) => {
    const params = useParams();
    const navigate = useNavigate();
    const [nomeVaga, setNomeVaga] = useState([]);
    const [descricao, setDescricao] = useState([]);
    const [beneficio, setBeneficio] = useState([]);

    const buscaVaga = async () => {
        const vaga = await loadVagas(firebaseApp, params.uid)
        setNomeVaga(vaga[0].nomeVaga)
        setDescricao(vaga[0].descricao)
        setBeneficio(vaga[0].beneficio)
    }

    useEffect( () => {
        estaLogado(navigate)
        buscaVaga()
    }, [])

    return <>
        <TopbarComponent hasArrowBack={true} hasProfile={true}/>

        <TypographyComponent 
            variant={'h1'} 
            sx={{
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 20,
                mt: 1.5
            }}>
            Detalhes da vaga de {nomeVaga}
                        
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
                    <TypographyComponent 
                            variant={'h3'} 
                            sx={{
                                textAlign: 'center',
                                fontWeight: 'bold',
                                fontSize: 20,
                                mt: 1.5
                            }}>
                            Casa dos pastéis 
                            {/* ${nomeEmpresa}  */}
                            
                    </TypographyComponent>
                    <TypographyComponent 
                    variant={'h4'} 
                    sx={{
                        textAlign: 'center',
                        padding: "0 30px",
                        marginTop: '20px',
                        fontSize: 23,
                    }}>
                    {descricao}
                </TypographyComponent>
                <TypographyComponent 
                    variant={'h5'} 
                    sx={{
                        textAlign: 'left',
                        fontWeight: 'bold',
                        fontSize: 20,
                        mt: 9
                    }}>
                    Benefícios:                            
                </TypographyComponent>
                <TypographyComponent 
                    variant={'h5'} 
                    sx={{
                        textAlign: 'left',
                        fontWeight: 'bold',
                        fontSize: 20,
                        mt: 1
                    }}>
                    {beneficio}                           
                </TypographyComponent>

                <BoxComponent
                        component="div"
                        sx={{ mt: 3, mb:2, pl: 4, pr: 4 }}
                        noValidate={true}
                        autoComplete={"off"}
                    > 
                        <ButtonComponent
                            sx={{
                                backgroundColor: '#8F00FF', 
                                borderRadius: '30px',
                                '&:hover': {
                                backgroundColor: '#7700FF',
                                borderColor: '#0062cc'}
                            }}
                            fullWidth={true} 
                            label="Tenho Interesse" />
                    </BoxComponent> 
                </div>
        </BoxComponent>
        

    </>
}

export default Detalhes;