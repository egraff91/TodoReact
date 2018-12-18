import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import {TodoContainer} from './TodoContainer';
import {combineReducers, createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {createLogger} from 'redux-logger';
import { todosReducer } from './store/todos.reducer';


const reducers = combineReducers({
  todos: todosReducer
});

const logger = createLogger({
  level: 'log',
});


const store = createStore(reducers, applyMiddleware(logger));

class App extends Component{
  render(){
    return (
      <Provider store={store}>
      <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <TodoContainer/>
        </div>
      </Provider>
        
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);

export default App;
