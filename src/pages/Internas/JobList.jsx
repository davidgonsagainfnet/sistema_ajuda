import { Box, List, ListItem, ListItemSecondaryAction, ListItemText, Typography } from "@mui/material";
import { estaLogado } from "../../utils/validaAutorizacao";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { BoxComponent, StackComponent, TopbarComponent, TypographyComponent } from "../../components";


const JobList = () => {
    const navigate = useNavigate();
    const dados = [
        {
          titulo: 'Item 1',
          salario: 'Subtitle 1',
          telefone: '123-456-7890',
        },
        {
          titulo: 'Item 2',
          salario: 'Subtitle 2',
          telefone: '987-654-3210',
        },
        {
          titulo: 'Item 3',
          salario: 'Subtitle 3',
          telefone: '123-456-7890',
        },
        {
          titulo: 'Item 4',
          salario: 'Subtitle 4',
          telefone: '987-654-3210',
        },
        {
          titulo: 'Item 5',
          salario: 'Subtitle 5',
          telefone: '123-456-7890',
        },
        {
          titulo: 'Item 6',
          salario: 'Subtitle 6',
          telefone: '987-654-3210',
        },
        // Add more objects as needed
      ];

    useEffect( () => {
        estaLogado(navigate)
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
                        margin: '30px 0px 10px 0px'
                        // width: '30%',
                    }}>
                    Vagas disponíveis
                </TypographyComponent> 


          <BoxComponent
                    component="div"
                    sx={{ 
                        // pr: 2,
                        backgroundColor: '#B398FF',
                        borderRadius: '10px 5px 5px 10px',
                        margin: '0px 12px 0px 12px'
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
                        pt: 2
                        // width: '30%',
                    }}>
                    {item.titulo}
                </TypographyComponent> 

                <TypographyComponent 
                    variant={'h1'} 
                    sx={{
                        textAlign: 'center',
                        fontWeight: 'bold',
                        fontSize: 20,
                        color: 'white',
                        mt: 1.5
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
                        mt: 1.5
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
    {/* {dados.map((item, index) => (
      <div key={index}>
        <h2>{item.titulo}</h2>
        <p>{item.salario}</p>
        <p>Phone: {item.telefone}</p>
      </div>
    ))} */}
    </BoxComponent>

          </StackComponent>
    </>
}

export default JobList;