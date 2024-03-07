import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import SideNav from './components/SideNav';
import { Routes, Route, BrowserRouter, useLocation } from 'react-router-dom'
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Settings } from './pages/Settings';
import Login from './pages/Login';
import ProtectedRoutes from './ProtectedRoutes';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const [redirected, setRedirected] = useState(false);
  const { isAuthenticated, user } = useAuth0()
  console.log("isAuthenticated", isAuthenticated);
  debugger;
  // useEffect(() => {
  //   if (!redirected && !isAuthenticated) {
  //     console.log('Redirect',user)
  //     setRedirected(true);
  //     if (window.location.pathname !== '/login') {
  //       window.location.href = '/login'; // Change '/login' to the desired page
  //     }
  //   }
  // }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          {!isAuthenticated ? <Route path='/' exact element={<Login />}>

          </Route> : <Route path='/' exact element={<ProtectedRoutes><Home /></ProtectedRoutes>}></Route>}

          <Route path='/about' exact element={<About />}></Route>
          <Route path='/settings' exact element={<Settings />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
