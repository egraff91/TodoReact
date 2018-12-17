import React from 'react';
import {TodoItem} from './TodoItem';
import PropTypes from 'prop-types';


export class TodoList extends React.Component{
    constructor(props){
        super(props);
    }

    render(){

        //console.log("todos "+this.props.todos);

        const todolist = this.props.todos.map((todo)=> 
        <TodoItem key={todo.title} title={todo.title} isDone={todo.isDone}/>
            )
        return( 
            <>
                <h3>Nombre de todos: {todolist.length}</h3>
                <ul>{todolist}</ul>
            </>
                 

        );
    }
}

TodoList.PropTypes = {
    todos: PropTypes.array
}