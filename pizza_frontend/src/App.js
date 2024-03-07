import "./App.css";
import { Container } from "react-bootstrap";
import { BrowserRouter,Route,Switch} from 'react-router-dom';
import TopBar from "./Components/TopBar";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Policy from "./Components/Policy";
import NavBar from "./Components/NavBar";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import Register from "./screens/Register";
import Login from "./screens/Login";
import AdminScreen from "./screens/AdminScreen";



function App() {
  return (
    <BrowserRouter>
      <TopBar/>
      <NavBar/>
      <Switch>
      <Route path="/AdminScreen" component={AdminScreen} />
      
        <Route path="/Login" component={Login} exact />
        <Route path="/Register" component={Register} exact />
        <Route path="/cart" component={CartScreen} exact />
        <Route path="/about" component={About} exact />
        <Route path="/ContactUS" component={Contact} exact />
        <Route path="/Policy" component={Policy} exact />
        <Route path="/Home" component={HomeScreen} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
