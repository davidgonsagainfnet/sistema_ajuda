import { lazy } from 'react';

const Login = lazy(() => import('./pages/Authentication/Login'));
const Home = lazy(() => import('./pages/Internas/Home'));
const Start = lazy(() => import('./pages/Internas/Start'));
const Perfil = lazy(() => import('./pages/Internas/Perfil'));
const JobList = lazy(() => import('./pages/Internas/JobList'));
const Detalhes = lazy(() => import('./pages/Internas/Detalhes'));
const Register = lazy(() => import('./pages/Authentication/Register'));
const CadVagas = lazy(() => import('./pages/Internas/CadastraVagas'));
const NotFound = lazy(() => import('./pages/NotFound'));


const routes = [
    { path: '/', element: Home, title: 'Home', tab: true },
    { path: '/login', element: Login, title: 'Login' },
    { path: '/register', element: Register, title: 'Cadastro' },
    { path: '/start', element: Start, title: 'Start' },
    { path: '/perfil', element: Perfil, title: 'Perfil' },
    { path: '/joblist', element: JobList, title: 'Lista de trabalhos disponíveis' },
    { path: '/detalhes/:id', element: Detalhes, title: 'Detalhes da vaga' },
    { path: '/cadastra-vagas', element: CadVagas, title: 'Cadastro de Vagas' },
    { path: '*', element: NotFound, title: 'Página não encontrada' },
]

export default routes;