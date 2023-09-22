import './App.css';
import { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Loading } from './components';
import routes from './routes';

import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
  databaseURL: process.env.REACT_APP_DATABASE_URL
};

function App() {

  const firebaseApp = initializeApp(firebaseConfig)

  return <Router>
    <Suspense fallback={<Loading/>}>
      <Routes>
        {
          routes.map((route, idx) => (
            <Route key={`${idx}_rotas`} exact path={route.path} element={<route.element firebaseApp={firebaseApp}/>} />
          ))
        }
      </Routes>
    </Suspense>
  </Router>;
}

export default App;
