import { Box, List, ListItem, ListItemSecondaryAction, ListItemText, Typography } from "@mui/material";
import { estaLogado } from "../../utils/validaAutorizacao";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { BoxComponent, StackComponent, TopbarComponent, TypographyComponent } from "../../components";


const JobList = () => {
    const navigate = useNavigate();
    const dados = [
        {
          titulo: 'Entregador M/F',
          salario: '2 Salários mínimos',
          telefone: '(11) 99999-9999',
        },
        {
          titulo: 'Caixa M/F',
          salario: '2 Salários mínimos',
          telefone: '(11) 99999-9999',
        },
        {
          titulo: 'Vendedor B2B M/F',
          salario: '1 Salário mínimo',
          telefone: '(11) 99999-9999',
        },
        {
          titulo: 'Segurança M/F',
          salario: '5 Salários mínimos',
          telefone: '(11) 99999-9999',
        },
        {
          titulo: 'Gari M/F',
          salario: '3 Salários mínimos',
          telefone: '(11) 99999-9999',
        },
        {
          titulo: 'Cozinheiro M/F',
          salario: '3 Salários mínimos',
          telefone: '(11) 99999-9999',
        },
        {
          titulo: 'Entregador M/F',
          salario: '2 Salários mínimos',
          telefone: '(11) 99999-9999',
        },
        {
          titulo: 'Caixa M/F',
          salario: '2 Salários mínimos',
          telefone: '(11) 99999-9999',
        },
        {
          titulo: 'Vendedor B2B M/F',
          salario: '1 Salário mínimo',
          telefone: '(11) 99999-9999',
        },
        {
          titulo: 'Segurança M/F',
          salario: '5 Salários mínimos',
          telefone: '(11) 99999-9999',
        },
        {
          titulo: 'Gari M/F',
          salario: '3 Salários mínimos',
          telefone: '(11) 99999-9999',
        },
        {
          titulo: 'Cozinheiro M/F',
          salario: '3 Salários mínimos',
          telefone: '(11) 99999-9999',
        },
        {
          titulo: 'Entregador M/F',
          salario: '2 Salários mínimos',
          telefone: '(11) 99999-9999',
        },
        {
          titulo: 'Caixa M/F',
          salario: '2 Salários mínimos',
          telefone: '(11) 99999-9999',
        },
        {
          titulo: 'Vendedor B2B M/F',
          salario: '1 Salário mínimo',
          telefone: '(11) 99999-9999',
        },
        {
          titulo: 'Segurança M/F',
          salario: '5 Salários mínimos',
          telefone: '(11) 99999-9999',
        },
        {
          titulo: 'Gari M/F',
          salario: '3 Salários mínimos',
          telefone: '(11) 99999-9999',
        },
        {
          titulo: 'Cozinheiro M/F',
          salario: '3 Salários mínimos',
          telefone: '(11) 99999-9999',
        },
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
                        pt: 2,
                        textShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)'
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