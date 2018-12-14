import React from 'react';
import {TodoItem} from './TodoItem';

export class TodoList extends React.Component{
    constructor(props){
        super(props);
    }

    render(){

        const todolist = this.props.todos.map((todo)=> 
        <TodoItem title={todo.title} isDone={todo.isDone}/>
            )
        return( 
            <>
            <h3>Nombre de todos: {todolist.length}</h3>
            <ul>{todolist}</ul>
            </>
                 

        );
    }
}