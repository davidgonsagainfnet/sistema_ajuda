import { estaLogado } from "../../utils/validaAutorizacao";
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import { ButtonComponent, StackComponent, TopbarComponent } from "../../components";

const Home = () => {
    const navigate = useNavigate();

    useEffect( () => {
        estaLogado(navigate)
    }, [])

    const openjobList = () => {
        navigate('/joblist')
    }

    const criarVagas = () => {
        navigate('/cadastra-vagas')
    }

    return <>
            <TopbarComponent hasArrowBack={true} hasProfile={true} />

            <StackComponent alignItems="center"
            sx={{
                mt: '65%'
            }}
            >
                <ButtonComponent
                            sx={{
                                backgroundColor: '#8F00FF',    
                                marginTop: '50px',
                                fontWeight: 'bold',
                                fontSize: '20px',
                                width: '300px',
                                borderRadius: '30px',
                                '&:hover': {
                                backgroundColor: '#7700FF',
                                borderColor: '#0062cc',
                                boxShadow: 'none',
                            },
                            }}
                            fullWidth={true} 
                            onClick={openjobList}
                            label="BUSCAR VAGAS"/>

                <ButtonComponent
                            sx={{
                                backgroundColor: '#8F00FF',    
                                marginTop: '50px',
                                fontWeight: 'bold',
                                fontSize: '20px',
                                width: '300px',
                                borderRadius: '30px',
                                '&:hover': {
                                backgroundColor: '#7700FF',
                                borderColor: '#0062cc',
                                boxShadow: 'none',
                            },
                            }}
                            fullWidth={true} 
                            onClick={criarVagas}
                            label="CRIAR VAGA"/>

            </StackComponent>
            </>
}

export default Home;