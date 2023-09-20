import {StackComponent, TypographyComponent, BoxComponent, TextFieldComponent, ButtonComponent} from "../../components";
import Box from '@mui/material/Box';
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import '../../App_theme.css';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import logoInicial from '../../assets/img/logo_inicial.png';


const Login = () => {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function fazerLogin(){
        console.log('logando');
        navigate('/');
    }

    function cadastrar(){
        
        navigate('/register');
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
            <StackComponent alignItems={"center"}>
                <img src={logoInicial} width={230} height={230} alt="Logo Login"/>
            </StackComponent>
            <StackComponent alignItems={"center"}>
                <TypographyComponent variant={'p'} sx={{
                                textAlign: 'center',
                                fontSize: '1.3rem !important'
                            }}>Ajudando quem precisa
                </TypographyComponent> 
            </StackComponent>
            <BoxComponent
                component="div"
                sx={{ mt: 3, mb:3, pl: 4, pr: 4 }}
                noValidate={true}
                autoComplete={"off"}
            >
                <TextFieldComponent 
                    variant="filled" fullWidth={true} label="Email" value={email} type="email" onChange={(e) => setEmail(e.target.value)}/>
            </BoxComponent>
            <BoxComponent
                component="div"
                sx={{ mt: 3, mb:1, pl: 4, pr: 4 }}
                noValidate={true}
                autoComplete={"off"}
            >
                <TextFieldComponent 
                    variant="filled" fullWidth={true} label="Password" value={password} type="password" onChange={(e) => setPassword(e.target.value)}/>
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
                }} to="/forgotpassword">Esqueci minha senha</Link>
            </StackComponent>
        </div>    
    </>
}

export default Login;