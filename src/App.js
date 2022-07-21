import Loading from './components/Loading';
import Cartoon from './components/Cartoon';
import axios from 'axios';
import './App.css';
import { useEffect, useState,Text } from 'react';
import React from 'react';


function App() {

   

  return (
    <div>     
    <Loading /> 
    <Cartoon/>
    </div>
  );
}


export default App;
