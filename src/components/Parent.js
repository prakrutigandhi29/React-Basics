import React, { Component } from 'react';
import Child from './Child';
class Parent extends Component {
  constructor(props){
      super(props)
      this.state={
        parentName:'Parent'
      }
      this.greet=this.greet.bind(this);
  }
 
  greet(childName){
      alert(`Hello ${this.state.parentName} from ${childName}`);
  }
  render(){
    return (<div>
        <Child greetHandler={this.greet}></Child>
        </div>)
    }
}

export default Parent;
