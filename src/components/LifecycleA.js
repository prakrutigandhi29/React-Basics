import React, { Component } from 'react';
import LifecycleB from './LifecycleB';
class LifecycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Prakruti'
      }
      console.log("A Constructor")
    }
    static getDerivedStateFromProps(props,state){
        console.log("A getDerviceState")
        return null;
    }
    shouldComponentUpdate(){
        console.log("A componentUpdate")
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("A snapshotBeforeUpdate")
        return null;
    }
    componentDidUpdate(){
        console.log("A componentDidUpdate")
    }
    changeState=()=>{
        this.setState({
            name:'Hello'
        })
    }
  render() {
      console.log("A render");
    return <div>
        LifeCycle A
        <button onClick={this.changeState}>Submit</button> 
        <LifecycleB></LifecycleB>

    </div>;
  }
  componentDidMount(){
      console.log("A didMount")
  }
}

export default LifecycleA;
