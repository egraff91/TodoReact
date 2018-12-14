import React from 'react'


export class TodoItem extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            isDone: this.props.isDone
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.setState({isDone: e.target.checked});
    }

    
    
    render(){
        const isDone  = this.state.isDone;
        return(
            <>
            {isDone ? (
                <strike><li>{this.props.title.toUpperCase()} <input type="checkbox" checked={this.state.isDone} onChange={this.handleChange}/></li></strike>
            ):(
                <li>{this.props.title.toUpperCase()} <input type="checkbox" checked={this.props.isDone} onChange={this.handleChange}/></li>
            )}
            </>
        );
    }
    
}