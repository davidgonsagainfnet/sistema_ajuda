import { useState } from "react";
import { BoxComponent, TextFieldComponent, TypographyComponent } from "../../components";

const Register = () => {
    const [nomeRazaoSocial, setNomeRazaoSocial] = useState("");
    const [documento, setDocumento] = useState("");
    const [email, setEmail] = useState("");
    const [celular, setCelular] = useState("");


    return <>
        <TypographyComponent 
            variant={'h5'}
            sx={{
                textAlign: 'center'
            }}>Dados Pessoais
            </TypographyComponent>
        
        {/* <BoxComponent
            component="div"
            sx={{ 
                width: 400,
                backgroundColor: '#fff',
                borderRadius: 10,
                paddingTop: 2,
                paddingBottom: 2,
                alignItems: "center" 
            }}            
        > */}
            <BoxComponent
                component="div"
                sx={{ mt: 3, mb:3, pl: 4, pr: 4}}
                noValidate={true}
                autoComplete={"on"}
            >
                <TextFieldComponent
                    variant={"filled"}
                    style={{
                        backgroundColor: "#fff",
                        borderRadius: 10 
                    }}
                    fullWidth={true} 
                    label={"Nome/Razão Social"}
                    value={nomeRazaoSocial}
                    type={"text"}
                    onChange={(e) => setNomeRazaoSocial(e.target.value)}
                    />
            </BoxComponent>

            <BoxComponent
                component="div"
                sx={{ mt: 3, mb:3, pl: 4, pr: 4}}
                noValidate={true}
                autoComplete={"on"}
            >
                <TextFieldComponent
                    variant={"filled"}
                    style={{
                        backgroundColor: "#fff",
                        borderRadius: 10 
                    }}
                    fullWidth={true} 
                    label={"Documento"}
                    value={documento}
                    type={"text"}
                    onChange={(e) => setDocumento(e.target.value)}
                    />
            </BoxComponent>

            <BoxComponent
                component="div"
                sx={{ mt: 3, mb:3, pl: 4, pr: 4}}
                noValidate={true}
                autoComplete={"on"}
            >
                <TextFieldComponent
                    variant={"filled"}
                    style={{
                        backgroundColor: "#fff",
                        borderRadius: 10 
                    }}
                    fullWidth={true} 
                    label={"Email"}
                    value={email}
                    type={"email"}
                    onChange={(e) => setEmail(e.target.value)}
                    />
            </BoxComponent>

            <BoxComponent
                component="div"
                sx={{ mt: 3, mb:3, pl: 4, pr: 4}}
                noValidate={true}
                autoComplete={"on"}
            >
                <TextFieldComponent
                    variant={"filled"}
                    style={{
                        backgroundColor: "#fff",
                        borderRadius: 10 
                    }}
                    fullWidth={true} 
                    label={"Celular"}
                    value={celular}
                    type={"text"}
                    onChange={(e) => setCelular(e.target.value)}
                    />
            </BoxComponent>

        {/* </BoxComponent> */}

        
        
    </>;
}

export default Register;