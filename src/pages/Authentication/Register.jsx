import { useState } from "react";
import { BoxComponent, StackComponent, TextFieldComponent, TypographyComponent } from "../../components";

const Register = () => {
    const [nomeRazaoSocial, setNomeRazaoSocial] = useState("");
    const [documento, setDocumento] = useState("");
    const [email, setEmail] = useState("");
    const [celular, setCelular] = useState("");


    return <>
        <TypographyComponent 
                variant={'h4'}
                sx={{
                    textAlign: 'center',
                    mt: 4
                }}>Cadastro de Contratante
                </TypographyComponent>
        
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

        
        
    </>;
}

export default Register;