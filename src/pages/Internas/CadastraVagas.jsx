import { Topbar, TypographyComponent, StackComponent, BoxComponent, TextFieldComponent, ButtonComponent } from "../../components";
import { useState } from "react";
import { saveVagas } from "../../utils/vagas";
import { useNavigate } from "react-router-dom";

const Detalhes = ({firebaseApp}) => {
    const navigate = useNavigate();
    const [nomeVaga, setNomeVaga] = useState("");
    const [salario, setSalario] = useState("");
    const [telefone, setTelefone] = useState("");
    const [descricao, setDescricao] = useState("");
    const [beneficio, setBeneficio] = useState("");

    const cadastrar = async () => {
        const data = {
            nomeVaga,
            salario,
            telefone,
            descricao,
            beneficio
        }
        await saveVagas(firebaseApp, data)
        alert('Vaga Gerada com Sucesso.')
        navigate('/joblist');
    }

    return <>
        <Topbar hasArrowBack={true} hasProfile={true} />
        <TypographyComponent 
                        variant={'h4'}
                        sx={{
                            textAlign: 'center',
                            mt: 3
                        }}>Cadastro de Vagas
        </TypographyComponent>

        <StackComponent alignItems={"center"} sx={{
                    marginTop: '5%'
                }}>
        
            <BoxComponent
                        component="div" 
                        sx={{
                            width: '70vw',
                            height: '75vh',
                            backgroundColor: '#B398FF',
                            borderRadius: 10,
                            paddingTop: 2,
                            paddingBottom: 2, 
                            textAlign: 'center',
                            display: 'inline-block'
                        }}> 

                <TextFieldComponent
                            variant={"filled"}
                            style={{
                                backgroundColor: "#fff",
                                borderRadius: 10,
                                background: 'white !important',
                                margin: '16px 16px 5px 16px', 
                                width: "80%" 
                            }}
                            fullWidth={true} 
                            label={"Vaga"}
                            value={nomeVaga}
                            type={"text"}
                            onChange={(e) => setNomeVaga(e.target.value)}
                            />

                <TextFieldComponent
                            variant={"filled"}
                            style={{
                                backgroundColor: "#fff",
                                borderRadius: 10,
                                background: 'white !important',
                                margin: '16px 16px 5px 16px', 
                                width: "80%" 
                            }}
                            fullWidth={true} 
                            label={"Salario"}
                            value={salario}
                            type={"text"}
                            onChange={(e) => setSalario(e.target.value)}
                            />

                <TextFieldComponent
                            variant={"filled"}
                            style={{
                                backgroundColor: "#fff",
                                borderRadius: 10,
                                background: 'white !important',
                                margin: '16px 16px 5px 16px', 
                                width: "80%" 
                            }}
                            fullWidth={true} 
                            label={"Telefone"}
                            value={telefone}
                            type={"text"}
                            onChange={(e) => setTelefone(e.target.value)}
                            />

                <TextFieldComponent
                            rows={4} multiline
                            variant={"filled"}
                            style={{
                                backgroundColor: "#fff",
                                borderRadius: 10,
                                background: 'white !important',
                                margin: '16px 16px 5px 16px', 
                                width: "80%" 
                            }}
                            fullWidth={true} 
                            label={"Descrição"}
                            value={descricao}
                            type={"text"}
                            onChange={(e) => setDescricao(e.target.value)}
                            />

                <TextFieldComponent
                            rows={3} multiline
                            variant={"filled"}
                            style={{
                                backgroundColor: "#fff",
                                borderRadius: 10,
                                background: 'white !important',
                                margin: '16px 16px 5px 16px', 
                                width: "80%" 
                            }}
                            fullWidth={true} 
                            label={"Beneficio"}
                            value={beneficio}
                            type={"text"}
                            onChange={(e) => setBeneficio(e.target.value)}
                            />

                <ButtonComponent
                                sx={{
                                    backgroundColor: '#8F00FF',
                                    borderRadius: '30px',
                                '&:hover': {
                                backgroundColor: '#7700FF',
                                borderColor: '#0062cc',
                                boxShadow: 'none',
                                },
                                mt: 2
                                }}   
                                fullWidth={true} 
                                onClick={cadastrar}
                                label="Cadastrar" />

                </BoxComponent>

        </StackComponent>

    </>
}

export default Detalhes;