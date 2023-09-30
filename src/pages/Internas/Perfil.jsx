import { estaLogado } from "../../utils/validaAutorizacao";
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import { AvatarComponent, BoxComponent, ButtonComponent, StackComponent, TopbarComponent, TypographyComponent } from "../../components";
import { Avatar } from "@mui/material";

const Perfil = () => {
    const navigate = useNavigate();


    const dados = {
        nome: "Renan de Assis Alves",
        subDescricao: "Usuário de StackOverflow",
        experienciaProfissional: [{
            nomeEmpresa: "New Finance 2007-2017",
            descricaoEmpresa: "Atendente de telemarketing, suporte ao consumidor",
            urlFotoEmpresa: "https://img.freepik.com/vetores-premium/logotipo-da-empresa-financeira_8163-31.jpg"
        },
        {
            nomeEmpresa: "Bora Mudar 2017-2022",
            descricaoEmpresa: "Auxiliar Social, ajudei pessoas em situação de crise a melhorarem de vida",
            urlFotoEmpresa: "https://png.pngtree.com/png-vector/20190217/ourlarge/pngtree-illustration-of-charity-logo-design-template-png-image_555252.jpg"
        }
    ],
        dificuldades: ["Dependente químico", "Morador de rua"]
    }

    return <>
       <TopbarComponent hasArrowBack={true} hasProfile={true} profileName={"Renan de Assis (Colaborador)"}/>

        <StackComponent alignItems={"center"}>
        <TypographyComponent
        variant="h4"
        sx={{
            marginTop: '10px'
        }}
        >
            {dados.nome}
        </TypographyComponent>
        <AvatarComponent
                sx={{
                    border: '1px solid white',
                    width: '100px',
                    height: '100px',
                    margin: '10px'
                                    }}
                 profileUrl={'https://cdn-icons-png.flaticon.com/512/3135/3135768.png'}/>

                 
                 
                 <TypographyComponent variant="h4">
            {dados.subDescricao}
        </TypographyComponent>

        <BoxComponent
                    component="div"
                    sx={{ 
                        backgroundColor: '#B398FF',
                        borderRadius: '10px 5px 5px 10px',
                        margin: '10px 12px 20px 12px',
                        width: '90%',
                         }}
                    noValidate={true}
                    autoComplete={"off"}
                >
        <div className="profile-details-container">
        <TypographyComponent 
                variant="h4"
                sx={{
                    textAlign: "center",
                    marginTop: "15px"
                }}>
            Experiência Profissional
        </TypographyComponent>
                {dados.experienciaProfissional.map((item, index) => (
                <div key={index} className="json-item" style={{
                    backgroundColor: '#9E4CDF',
                    borderRadius: '30px',
                    width: '100%',
                    boxShadow: '0px 5px 5px rgba(0, 0, 0, 0.5)'
                }}>
                <div style={{
                    display: "flex",
                    padding: '10px'
                }}>

                
                <AvatarComponent
                sx={{
                    border: '1px solid white',
                    marginRight: '10px',
                    width: '50px',
                    height: '50px',
                                    }}
                 profileUrl={item.urlFotoEmpresa}
                >
                </AvatarComponent>

                <TypographyComponent 
                    variant={'h1'} 
                    sx={{
                        fontWeight: 'bold',
                        fontSize: 12,
                        color: 'white',
                        pt: 2,
                        textShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)'
                    }}>
                    {item.nomeEmpresa}

                    <TypographyComponent 
                    variant={'h1'} 
                    sx={{
                        fontSize: 10,
                        color: 'white',
                        pt: 2,
                    }}>
                    {item.descricaoEmpresa}
                </TypographyComponent> 
                </TypographyComponent> 
                
            </div>
                </div>
                ))}
                <TypographyComponent 
                variant="h4"
                sx={{
                    textAlign: "center",
                }}>
            Dificuldades
        </TypographyComponent>      
                <div className="json-item" style={{
                    backgroundColor: '#9E4CDF',
                    borderRadius: '30px',
                    boxShadow: '0px 5px 5px rgba(0, 0, 0, 0.5)',
                    padding: '15px',
                    margin: '15px',
                    marginBottom: '20px'
                }}>
                
{dados.dificuldades.map((item, index) => (
            <TypographyComponent key={index}
            variant="h1"
            sx={{
                fontWeight: 'bold',
                        fontSize: 15,
            }}
            >
                - {item}
            </TypographyComponent>
                ))}
                    
                </div>
                </div>

                

                </BoxComponent>
        </StackComponent>

       
    </>
}

export default Perfil;