import {StackComponent, TypographyComponent, BoxComponent, TextFieldComponent, ButtonComponent} from "../../components";
import Box from '@mui/material/Box';
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import logoInicial from '../../assets/img/logo_inicial.png';
import { login, restauraPassword } from '../../utils/validaAutorizacao';


const Login = ({firebaseApp}) => {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function isValidEmail(email) {
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        return emailRegex.test(email);
    }

    async function fazerLogin(){
        if(!isValidEmail(email)){
            alert('Informe um email valido')
            return
        } else if(password.length == 0){
            alert('Informe sua senha')
            return
        }
        await login(firebaseApp, {email, password}, navigate);
    }

    async function recuperarSenha(){
        if(!isValidEmail(email)){
            alert('Informe um email valido, para recuperar sua senha')
            return
        }
        await restauraPassword(firebaseApp, email)
    }

    function cadastrar(){
        
        navigate('/start');
    }

    return <>
        <div className="app-container">
            <br/>
            <StackComponent alignItems={"center"}>
                <TypographyComponent variant={'p'} sx={{
                                textAlign: 'center',
                                fontSize: '2.1rem !important'
                            }}>AJUDE-ME!
                </TypographyComponent> 
            </StackComponent>
            <StackComponent 
                alignItems={"center"}>
                <img src={logoInicial} 
                    width={230} 
                    height={230} 
                    alt="Logo Login"/>
            </StackComponent>
            <StackComponent alignItems={"center"}>
                <TypographyComponent 
                    variant={'p'} 
                    sx={{
                        textAlign: 'center',
                        fontSize: '1.3rem !important'
                    }}>Ajudando quem precisa
                </TypographyComponent> 
            </StackComponent>
            <div style={{
                backgroundColor: '#fff',
                height: '100%',
                width: '100%',
                paddingTop: '10px',
                marginTop: '10px',
                borderRadius: '40px 40px 0px 0px'
            }}>
                <BoxComponent
                    component="div"
                    sx={{ mt: 3, mb:3, pl: 4, pr: 4 }}
                    noValidate={true}
                    autoComplete={"off"}
                >
                    <TextFieldComponent 
                        variant="outlined"
                        style={{
                            backgroundColor: "#fff",
                            borderRadius: 10,
                            border: 'none' 
                        }} 
                        fullWidth={true} 
                        label="Email" 
                        value={email} 
                        type="email" 
                        onChange={(e) => setEmail(e.target.value)}/>
                </BoxComponent>
                <BoxComponent
                    component="div"
                    sx={{ mt: 3, mb:1, pl: 4, pr: 4 }}
                    noValidate={true}
                    autoComplete={"off"}
                >
                    <TextFieldComponent 
                        variant="outlined"
                        style={{
                            backgroundColor: "#fff",
                            borderRadius: 10 
                        }} 
                        fullWidth={true} 
                        label="Password" 
                        value={password} 
                        type="password" 
                        onChange={(e) => setPassword(e.target.value)}/>
                </BoxComponent>
                <Box
                    display="flex"
                    justifyContent="center" // Isso centralizará os elementos horizontalmente
                    mt={1}
                    mb={3}
                >
                    <BoxComponent
                        component="div"
                        sx={{ mt: 1, mb:3, pl: 4, pr: 4 }}
                        noValidate={true}
                        autoComplete={"off"}
                    > 
                        <ButtonComponent
                            startIcon={<LoginIcon sx={{color: '#fff'}}/>}
                            fullWidth={true} 
                            label="Entrar" onClick={fazerLogin}/>
                    </BoxComponent> 
                    <BoxComponent
                        component="div"
                        sx={{ mt: 1, mb:3, pl: 4, pr: 4 }}
                        noValidate={true}
                        autoComplete={"off"}
                    > 
                        <ButtonComponent
                            startIcon={<PersonAddIcon sx={{color: '#fff'}}/>}
                            fullWidth={true} 
                            label="Cadastrar" onClick={cadastrar}/>
                    </BoxComponent> 
                </Box>
                <StackComponent sx={{mt: 4, mb: 4}} alignItems={'center'}>
                    <Link style={{
                        color: '#333',
                        textDecoration: 'none',
                        fontWeight: '200 !important',
                        fontSize: 16
                    }} onClick={recuperarSenha}>Esqueci minha senha</Link>
                </StackComponent>
            </div>
        </div>    
    </>
}

export default Login;