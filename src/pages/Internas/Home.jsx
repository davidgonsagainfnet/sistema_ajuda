import { Typography } from "@mui/material";
import { estaLogado } from "../../utils/validaAutorizacao";
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import { BoxComponent, ButtonComponent, StackComponent, TopbarComponent, TypographyComponent } from "../../components";

const Home = () => {
    const navigate = useNavigate();

    useEffect( () => {
        estaLogado(navigate)
    }, [])

    const openjobList = () => {
        navigate('/joblist')
    }

    return <>
                <StackComponent>
                <TopbarComponent hasArrowBack={true} hasProfile={true} profileName={"Renan de Assis (Colaborador)"}/>

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
                            //onClick={contratar}
                            label="CRIAR VAGA"/>

                </StackComponent>
            </>
}

export default Home;