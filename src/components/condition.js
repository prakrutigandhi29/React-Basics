import React, { Component } from 'react';

class condition extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         age:'44'
      }
    }
    
  render() {
    //   if(this.state.age<18)
    //     return <div>You are not eligible</div>;
    // else{
    //     return <div>You are eligible</div>;
    // }

    // let message;
    // if(this.state.age<18)
    //     message="You are not eligible"
    // else
    //     message="You are eligible"
    // return <div>{message}</div>

    // return this.state.age<18?
    // <div>You are not eligible</div>:
    // <div>You are eligible</div>

    return this.state.age>18 && <div>You are eligible</div>
    
  }
}

export default condition;
