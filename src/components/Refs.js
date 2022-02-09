import React, { Component } from 'react';

class Refs extends Component {
    constructor(props) {
      super(props)
      this.inputRef=React.createRef();
    }
    componentDidMount(){
        this.inputRef.current.focus();
    }
    eventHandler=()=>{
        alert(this.inputRef.current.value)
    }
  render() {
    return <div>
        <input type="text" ref={this.inputRef} ></input>
        <button onClick={this.eventHandler}>Submit</button>

    </div>;
  }
}

export default Refs;
