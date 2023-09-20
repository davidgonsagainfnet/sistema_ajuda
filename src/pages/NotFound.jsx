import {StackComponent, TypographyComponent} from "../components";
import notFoundImg from '../assets/img/notfound.gif';
import '../App.css';
const NotFound = () => {

    return <>
        <StackComponent alignItems={"center"}>
            <img src={notFoundImg} width={230} height={230} alt="Pagina Não Encontrada"/>
        </StackComponent>
        <StackComponent alignItems={"center"}>
            <TypographyComponent variant={'p'} sx={{
                            textAlign: 'center',
                            fontSize: '1.6rem !important'
                        }}>
                            Pagina não existe
            </TypographyComponent>
        </StackComponent>
    </>
}

export default NotFound