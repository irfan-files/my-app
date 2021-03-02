import logo from './logo.svg';
import './App.css';
import Home from './Component/Fungsional/Home';
import Parent from './Component/Class/Parent';
import { Button, Form } from "reactstrap";
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import NavbarComp from './Component/Fungsional/NavbarComp';
import HomePage from './Component/Fungsional/HomePage';
import About from './Component/Fungsional/AboutComp';
import DetailComp from './Component/Fungsional/DetailComp';
import ListenComp from './Component/Class/ListenComp';
import TambahComp from './Component/Class/TambahComp';
import EditComp from './Component/Class/EditComp';
import FormComp from './Component/Form/FormComp';

// import Beranda from './Component/Class/Beranda';

const App = () => {
  return (
    <BrowserRouter>
    <NavbarComp/>
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/mahasiswa" component={ListenComp}/>
      <Route exact path="/mahasiswa/tambah" component={TambahComp}/>
      <Route exact path="/mahasiswa/edit" component={EditComp}/>
      <Route exact path="/detail/:id" component={DetailComp}/>
      <Route exact path="/pelayanan" component={FormComp}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
