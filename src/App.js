import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import {TodoList} from './TodoList';

function App(){

  const listTodos = [{
    title: "Send a mail",
    isDone: false
  },
{
  title: "Finish TP",
  isDone: false
},
{
  title: "go to WE",
  isDone: false
}]
  return(     
     <TodoList todos={listTodos}/> 
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

export default App;
