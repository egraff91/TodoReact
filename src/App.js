import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import {TodoContainer} from './TodoContainer';


function App(){

 
  return(
    <TodoContainer/>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

export default App;
