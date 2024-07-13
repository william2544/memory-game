import React, {Component} from "react";

class Counter extends Component{
    constructor(props) {
        super(props)
        this.state={
            count:0
        }
    }
    increment(){
        this.setState({
            count:this.state.count+1
        })
        console.log(this.state.count);
    }

    render(){
        return (
            <div>
                <h3>Count: {this.state.count}</h3>
                <button onClick={()=>this.increment()}>Increment</button>
            </div>
        )
    }
}

export default Counter