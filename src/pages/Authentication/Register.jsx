import { useState } from "react";
import { BoxComponent, StackComponent, TextFieldComponent, TypographyComponent, Topbar, ButtonComponent } from "../../components";
import { registrarUsuario } from "../../utils/validaAutorizacao"
import { useNavigate } from "react-router-dom";

const Register = ({firebase}) => {
    const [nomeRazaoSocial, setNomeRazaoSocial] = useState("");
    const [documento, setDocumento] = useState("");
    const [email, setEmail] = useState("");
    const [celular, setCelular] = useState("");
    const [isVisibleContratante, setIsVisibleContratante] = useState(true);
    const [isVisibleAcesso, setIsVisibleAcesso] = useState(false);
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const navigate = useNavigate();

    function isValidEmail(email) {
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        return emailRegex.test(email);
    }

    const continuar = () => {

        if(nomeRazaoSocial.length == 0 || documento.length == 0 || email.length == 0 || celular.length == 0){
            alert('Preencha todos os campos')
            return
        }

        if(!isValidEmail(email)){
            alert('informe um email valido')
            return
        }

        setIsVisibleContratante(false)
        setIsVisibleAcesso(true)
    }

    const cadastrar = async () => {
        if(!isValidEmail(email)){
            alert('informe um email valido')
            return
        }

        if(email.length == 0 || password.length == 0 || passwordConfirm.length == 0){
            alert('Preencha todos os campos')
            return
        }

        if(password !== passwordConfirm){
            alert('Senhas diferentes')
            return
        }

        if(password.length < 5){
            alert('Senha deve ter no minimo 5 caracteres')
            return
        }

        await registrarUsuario(firebase,{email, password}, navigate)
    }


    return <>
        <Topbar hasArrowBack={true} hasProfile={false} profileName={"Ayrton Senna"}/>
        
                <TypographyComponent 
                        variant={'h4'}
                        sx={{
                            textAlign: 'center',
                            mt: 4
                        }}>Cadastro de Contratante
                        </TypographyComponent>
            {isVisibleContratante && <>    
                <StackComponent alignItems={"center"} sx={{
                    mt: 16
                }}>
                    <BoxComponent
                        component="div" 
                        sx={{
                            width: 300,
                            height: 400,
                            backgroundColor: '#fff',
                            borderRadius: 10,
                            paddingTop: 2,
                            paddingBottom: 2, 
                            textAlign: 'center'
                        }}            
                    > 
                        <TypographyComponent 
                            variant={'h5'}
                            sx={{
                                textAlign: 'center'
                            }}>Dados Pessoais
                        </TypographyComponent>              
                        <TextFieldComponent
                            variant={"filled"}
                            style={{
                                backgroundColor: "#fff",
                                borderRadius: 10,
                                margin: 16, 
                                width: "80%" 
                            }}
                            fullWidth={true} 
                            label={"Nome/Razão Social"}
                            value={nomeRazaoSocial}
                            type={"text"}
                            onChange={(e) => setNomeRazaoSocial(e.target.value)}
                            />
                    
                        <TextFieldComponent
                            variant={"filled"}
                            style={{
                                backgroundColor: "#fff",
                                borderRadius: 10,
                                margin: 16, 
                                width: "80%"  
                            }}
                            fullWidth={true} 
                            label={"Documento"}
                            value={documento}
                            type={"text"}
                            onChange={(e) => setDocumento(e.target.value)}
                            />
                    
                        <TextFieldComponent
                            variant={"filled"}
                            style={{
                                backgroundColor: "#fff",
                                borderRadius: 10,
                                margin: 16, 
                                width: "80%"  
                            }}
                            fullWidth={true} 
                            label={"Email"}
                            value={email}
                            type={"email"}
                            onChange={(e) => setEmail(e.target.value)}
                            />
                    
                        <TextFieldComponent
                            variant={"filled"}
                            style={{
                                backgroundColor: "#fff",
                                borderRadius: 10,
                                margin: 16, 
                                width: "80%" 
                            }}
                            fullWidth={true} 
                            label={"Celular"}
                            value={celular}
                            type={"text"}
                            onChange={(e) => setCelular(e.target.value)}
                            />
                    </BoxComponent>
                </StackComponent>

                <BoxComponent
                                component="div"
                                sx={{ mt: 1, mb:3, pl: 4, pr: 4 }}
                                noValidate={true}
                                autoComplete={"off"}
                > 
                <ButtonComponent
                                    
                                fullWidth={true} 
                                onClick={continuar}
                                label="Continuar" />
                </BoxComponent> 
        </>}

        {isVisibleAcesso && <> 
            <StackComponent alignItems={"center"} sx={{
                    mt: 16
                }}>
                    <BoxComponent
                        component="div" 
                        sx={{
                            width: 300,
                            height: 400,
                            backgroundColor: '#fff',
                            borderRadius: 10,
                            paddingTop: 2,
                            paddingBottom: 2, 
                            textAlign: 'center'
                        }}            
                    > 
                        <TypographyComponent 
                            variant={'h5'}
                            sx={{
                                textAlign: 'center'
                            }}>Informações de Acesso
                        </TypographyComponent>
                        <TextFieldComponent
                            variant={"filled"}
                            style={{
                                backgroundColor: "#fff",
                                borderRadius: 10,
                                margin: 16, 
                                width: "80%"  
                            }}
                            fullWidth={true} 
                            label={"Email"}
                            value={email}
                            type={"email"}
                            onChange={(e) => setEmail(e.target.value)}
                            />
                    
                        <TextFieldComponent
                            variant={"filled"}
                            style={{
                                backgroundColor: "#fff",
                                borderRadius: 10,
                                margin: 16, 
                                width: "80%" 
                            }}
                            fullWidth={true} 
                            label={"Senha"}
                            value={password}
                            type="password" 
                            onChange={(e) => setPassword(e.target.value)}
                            />
                    
                    <TypographyComponent>
                        Confirmar Senha
                    </TypographyComponent>
                    <TextFieldComponent
                            variant={"filled"}
                            style={{
                                backgroundColor: "#fff",
                                borderRadius: 10,
                                margin: 16, 
                                width: "80%" 
                            }}
                            fullWidth={true} 
                            label={"Confirmas Senha"}
                            value={passwordConfirm}
                            type="password" 
                            onChange={(e) => setPasswordConfirm(e.target.value)}
                    />
                    </BoxComponent>
                </StackComponent>
                <BoxComponent
                                component="div"
                                sx={{ mt: 1, mb:3, pl: 4, pr: 4 }}
                                noValidate={true}
                                autoComplete={"off"}
                > 
                <ButtonComponent
                                    
                                fullWidth={true} 
                                onClick={cadastrar}
                                label="Cadastrar" />
                </BoxComponent> 
        </>}

        
        
    </>;
}

export default Register;