import logo from './logo.svg';
import './App.css';

import { Routes, Route, BrowserRouter, useLocation } from 'react-router-dom'
import SignUp from './Components/Screens/SignUp'
import HomeScreen from './Components/Screens/HomeScreen';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
         
          <Route path='/' exact element={<SignUp />}></Route>
          <Route path='/home' exact element={<HomeScreen />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
