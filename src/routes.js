import { lazy } from 'react';

const Login = lazy(() => import('./pages/Authentication/Login'));
const Home = lazy(() => import('./pages/Internas/Home'));
const NotFound = lazy(() => import('./pages/NotFound'));


const routes = [
    { path: '/', element: Home, title: 'Home', tab: true },
    { path: '/login', element: Login, title: 'Login' },
    { path: '*', element: NotFound, title: 'Página não encontrada' },
]

export default routes;