import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {LoginResponseInterface} from "./Interfaces/ResponseInterface";
import HideIfLogged from "./Components/HideIfLogged";
import HideIfNotLogged from "./Components/HideIfNotLogged";
import Router from "./Router";


function App() {


  return (
          <Router/>
  );
}

export default App;
