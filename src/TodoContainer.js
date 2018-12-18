import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';



export class TodoContainer extends React.Component {
    
    render() {
        //const listTodos = this.state.listTodos;
        //console.log(listTodos);
        return(
            <>
                <TodoForm/>
                <TodoList/>
            </>
            
        );
        
    }
}

/*<TodoList todos={this.state.listTodos} />
<TodoForm createTodo={this.handleChange} clearTodos={this.handleReset}/>
*/

