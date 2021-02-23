import logo from './logo.svg';
import './App.css';
import Home from './Component/Fungsional/Home';
import Parent from './Component/Class/Parent';
import { Button } from "reactstrap";
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import NavbarComp from './Component/Fungsional/NavbarComp';
import HomePage from './Component/Fungsional/HomePage';
import About from './Component/Fungsional/AboutComp';

// import Beranda from './Component/Class/Beranda';

const App = () => {
  return (
    <BrowserRouter>
    <NavbarComp/>
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/about" component={About}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
