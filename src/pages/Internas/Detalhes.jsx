import { BoxComponent, ButtonComponent, TopbarComponent, TypographyComponent } from "../../components";


const Detalhes = () => {

    return <>
        <TopbarComponent hasArrowBack={true} hasProfile={true}/>

        <TypographyComponent 
            variant={'h1'} 
            sx={{
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 20,
                mt: 1.5
            }}>
            Detalhes da vaga de Cozinheiro 
            {/* Detalhes da vaga de ${tituloVaga}  */}
                        
        </TypographyComponent>

        <BoxComponent
                    component="div"
                    sx={{ 
                        backgroundColor: '#B398FF',
                        borderRadius: '10px 5px 5px 10px',
                        margin: '10px 12px 20px 12px'
                         }}
                    noValidate={true}
                    autoComplete={"off"}
                >
                <div className="json-list-container">
                    <TypographyComponent 
                            variant={'h3'} 
                            sx={{
                                textAlign: 'center',
                                fontWeight: 'bold',
                                fontSize: 20,
                                mt: 1.5
                            }}>
                            Casa dos pastéis 
                            {/* ${nomeEmpresa}  */}
                            
                    </TypographyComponent>
                    <TypographyComponent 
                    variant={'h4'} 
                    sx={{
                        textAlign: 'center',
                        padding: "0 30px",
                        marginTop: '20px',
                        fontSize: 23,
                    }}>
                    “Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s”
                    {/* ${descricaoVaga}  */}
                </TypographyComponent>
                <TypographyComponent 
                    variant={'h5'} 
                    sx={{
                        textAlign: 'left',
                        fontWeight: 'bold',
                        fontSize: 20,
                        mt: 9
                    }}>
                    Benefícios:                            
                </TypographyComponent>
                <TypographyComponent 
                    variant={'h5'} 
                    sx={{
                        textAlign: 'left',
                        fontWeight: 'bold',
                        fontSize: 20,
                        mt: 1
                    }}>
                    * Vale refeição de 19,90 por dia<br/>
                    * Auxílio transporte<br/>
                    * Seguro de vida 
                    {/* ${listaBeneficios}  */}                          
                </TypographyComponent>

                <BoxComponent
                        component="div"
                        sx={{ mt: 3, mb:2, pl: 4, pr: 4 }}
                        noValidate={true}
                        autoComplete={"off"}
                    > 
                        <ButtonComponent
                            sx={{
                                backgroundColor: '#8F00FF', 
                                borderRadius: '30px',
                                '&:hover': {
                                backgroundColor: '#7700FF',
                                borderColor: '#0062cc'}
                            }}
                            fullWidth={true} 
                            label="Tenho Interesse" />
                    </BoxComponent> 
                </div>
        </BoxComponent>
        

    </>
}

export default Detalhes;