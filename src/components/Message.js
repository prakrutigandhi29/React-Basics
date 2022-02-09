import React, { Component } from 'react';

class Message extends Component{
    constructor(){
        super()
        this.state={
            message:'Hello Message'
        }
    }
    changeMessage(){
            this.setState({
                message: 'Hello World'
            })
        }
    render(){
        return (
            <div>
            <h1>{this.state.message}</h1>
            <button onClick={()=>this.changeMessage()} >Submit</button>
            </div>
        )
    }
}
export default Message;