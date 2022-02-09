import React, { Component, PureComponent } from 'react';
import RegComp from './RegComp';
import PureComp from './PureComp';
import MemoComponent from './MemoComponent';
class ParentComp extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           name:'Prakruti'
        }
      }
      componentDidMount(){
         setInterval(()=>{
          this.setState({
              name:'Prakruti'
          })
         },2000) 
      }
  render() {
      console.log("Parent Component")
    return <div>
        Parent Component
        {/* <RegComp name={this.state.name}></RegComp>
        <PureComp name={this.state.name}></PureComp> */}
        <MemoComponent name={this.state.name}></MemoComponent>
    
    </div>;
  }
}

export default ParentComp;
