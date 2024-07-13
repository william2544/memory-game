import React, { Component } from "react";


class ClassInput extends Component{
    constructor(props){
        super(props);
        this.state={
            todos:[],
            data:''
        }
        this.hundleInputChange = this.hundleInputChange.bind(this);
        this.hundleSubmit = this.hundleSubmit.bind(this);
    }
    hundleInputChange(e){
        this.setState((state)=>({
            ...state,
            data:e.target.value,
        }))
    }
    hundleSubmit(e){
        e.preventDefault();
        this.setState((state)=>({
            todos:state.todos.concat(state.data),
            data:''
        }))
    }
    deleteItem(todo){
        this.setState()
    }



    render(){
        return (
            <>
                <h2>This is my todo based on class based components</h2>
                <form action="" onSubmit={this.hundleSubmit}>
                    <label htmlFor="Input-data"></label>
                    <input type="text" value={this.state.data} placeholder="data to add"onChange={this.hundleInputChange}/>
                    <button type="submit">Submit</button>
                </form>
                <ol>
                    {this.state.todos.map((todo)=>(
                        <li key={todo}>{todo} <button onClick={()=>this.deleteItem(todo)}>Delete</button></li>
                    ))}
                </ol>
            </>
        )
    }
}

export default ClassInput;