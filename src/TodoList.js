import React from 'react';
import {TodoItem} from './TodoItem';
import {TodoContext} from './TodoContext';
import PropTypes from 'prop-types';


export class TodoList extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <TodoContext.Consumer>
            {
                ({todosList})=> {
                    const listTodos = todosList.map((todo)=>
                        <TodoItem key={todo.title} title={todo.title} isDone={todo.isDone}/>
                    )
                    return(
                        <>
                            <h3>Nombre de todos: {listTodos.length}</h3>
                            <ul>{listTodos}</ul>
                        </>
                    );
                }
            }
        </TodoContext.Consumer>
        )

        

        /*const todolist = this.props.todos.map((todo)=> 
        <TodoItem key={todo.title} title={todo.title} isDone={todo.isDone}/>
            )
        return( 
            <>
                <h3>Nombre de todos: {todolist.length}</h3>
                <ul>{todolist}</ul>
            </>
                 

        );*/
    }
}

TodoList.PropTypes = {
    todos: PropTypes.array
}