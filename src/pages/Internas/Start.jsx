import {StackComponent, TypographyComponent, BoxComponent, TextFieldComponent, ButtonComponent} from "../../components";
import { Typography } from "@mui/material";
import { estaLogado } from "../../utils/validaAutorizacao";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import Topbar from "../../components/Topbar";

const Start = () => {
    const navigate = useNavigate();

    const contratar = () => {
        navigate('/register')
    }

    return <>
    
         <StackComponent alignItems={"center"}>
         <Topbar hasArrowBack={true} hasProfile={false} profileName={"Ayrton Senna"}/>
                <TypographyComponent 
                    variant={'h1'} 
                    sx={{
                        textAlign: 'center',
                        padding: "0 30px",
                        marginTop: '40px',
                        fontWeight: 'bold',
                        fontSize: '1.3rem !important',
                        fontSize: 23,
                    }}>
                    “Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s”
                </TypographyComponent> 
                <TypographyComponent 
                    variant={'h1'} 
                    sx={{
                        textAlign: 'center',
                        marginTop: '30px',
                        fontSize: '1.3rem !important',
                        fontWeight: 'bold',
                        fontSize: 30
                    }}>O que você gostaria?
                </TypographyComponent> 

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
                            onClick={contratar}
                            label="QUERO CONTRATAR"/>

                            <ButtonComponent
                            sx={{
                                backgroundColor: '#8F00FF',
                                marginTop: '15px',
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
                            label="QUERO COLABORAR"/>
                            <ButtonComponent
                            sx={{
                                backgroundColor: '#8F00FF',
                                marginTop: '15px',
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
                            label="PRECISO DE AJUDA"/>
            </StackComponent>
    </>
}

export default Start;

