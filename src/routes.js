import { lazy } from 'react';

const Login = lazy(() => import('./pages/Authentication/Login'));
const Home = lazy(() => import('./pages/Internas/Home'));
const Start = lazy(() => import('./pages/Internas/Start'));
const JobList = lazy(() => import('./pages/Internas/JobList'));
const Detalhes = lazy(() => import('./pages/Internas/Detalhes'));
const Register = lazy(() => import('./pages/Authentication/Register'));
const NotFound = lazy(() => import('./pages/NotFound'));


const routes = [
    { path: '/', element: Home, title: 'Home', tab: true },
    { path: '/login', element: Login, title: 'Login' },
    { path: '/register', element: Register, title: 'Cadastro' },
    { path: '/start', element: Start, title: 'Start' },
    { path: '/joblist', element: JobList, title: 'Lista de trabalhos disponíveis' },
    { path: '/detalhes/:id', element: Detalhes, title: 'Detalhes da vaga' },
    { path: '*', element: NotFound, title: 'Página não encontrada' },
]

export default routes;