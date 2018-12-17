import React from 'react';
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';

/*let listTodos = [{
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
}]*/



export class TodoContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            listTodos: []
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleChange(data) {
        //console.log("data ", data); 
        
        this.setState({
            listTodos: [{ title: data, isDone: false }, ...this.state.listTodos]
        });
    }

    handleReset(){
        this.setState({
            listTodos: []
        })
    }


    render() {
        const listTodos = this.state.listTodos;
        //console.log(listTodos);
        return (

            <>
                <TodoForm createTodo={this.handleChange} clearTodos={this.handleReset}/>
                {listTodos.length > 0 ? (


                    <TodoList todos={this.state.listTodos} />

                ) : (
                        <p>Vous n'avez aucun todo</p>
                    )}
            </>

        );
    }
}