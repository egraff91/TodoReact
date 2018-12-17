import React from 'react';
import PropType from 'prop-types';



export class TodoForm extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            todo: props.todo
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.resetClicked = this.resetClicked.bind(this);
    }

    handleChange(event){

        this.setState({todo: event.target.value});      

    }

    handleSubmit(event){

        this.props.createTodo(this.state.todo);
        this.setState({
            todo: ''
        })
        event.preventDefault();
       
    }

    resetClicked(){
        this.props.clearTodos();
    }

    render(){
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Todo
                        <input type="text" name="todo" value={this.state.todo} onChange={this.handleChange}/>
                    </label>
                    <input type="submit" value="Submit" />  
                </form>
                <button onClick={this.resetClicked}>Reset liste</button>
            </>
        )
    }

}

TodoForm.PropType = {
    createTodo: PropType.func.isRequired,
    clearTodos: PropType.func.isRequired,
}