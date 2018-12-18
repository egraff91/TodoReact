import React from 'react';
import {connect} from 'react-redux';
import {TodoItem} from './TodoItem';
import PropTypes from 'prop-types';


export class TodoList extends React.Component{

    render(){

        const todolist = this.props.todos.map((todo)=> 
        <TodoItem key={todo.id} title={todo.title} isDone={todo.isDone}/>
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

const mapStateToProps = state => ({
    todos: state.todos.list
});

export default connect(
    mapStateToProps
)(TodoList)