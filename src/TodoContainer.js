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

let listTodos = [];

export class TodoContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            listTodos: listTodos
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(data) {
        //console.log("data ", data);
        if(data){
            listTodos.push({ title: data, isDone: false });
            this.setState({
                listTodos: listTodos
            });
        }else{
            this.setState({
                listTodos: ''
            })
        }
        
    }

    render() {
        const listTodos = this.state.listTodos;
        //console.log(listTodos);
        return (

            <>
                <TodoForm todo='' handlerFromParent={this.handleChange} />
                {listTodos.length > 0 ? (


                    <TodoList todos={this.state.listTodos} />

                ) : (
                        <p>Vous n'avez aucun todo</p>
                    )}
            </>

        );
    }
}