import './App.css';
import { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Loading } from './components';
import routes from './routes';

const routesFree = ['/login', '/register', '/recovery-password']

function App() {

  return <Router>
    <Suspense fallback={<Loading/>}>
      <Routes>
        {
          routes.map((route, idx) => (
            <Route key={`${idx}_rotas`} exact path={route.path} element={<route.element loggoutRoutes={routesFree}/>} />
          ))
        }
      </Routes>
    </Suspense>
  </Router>;
}

export default App;
