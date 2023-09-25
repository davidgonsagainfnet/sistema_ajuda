import { Typography } from "@mui/material";
import { estaLogado } from "../../utils/validaAutorizacao";
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';

const Home = () => {
    const navigate = useNavigate();

    useEffect( () => {
        estaLogado(navigate)
    }, [])

    return <>
          <Typography>Home</Typography> 
    </>
}

export default Home;