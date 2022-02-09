import React, { Component } from 'react';

class LifecycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Prakruti'
      }
      console.log("B Constructor")
    }
    static getDerivedStateFromProps(props,state){
        console.log("B getDerviceState")
        return null;
    }
    shouldComponentUpdate(){
        console.log("B componentUpdate")
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("B snapshotBeforeUpdate")
        return null;
    }
    componentDidUpdate(){
        console.log("B componentDidUpdate")
    }
    changeState=()=>{
        this.setState({
            name:'Hello'
        })
    }
  render() {
      console.log("B render");
    return <div>
        LifeCycle B
    </div>;
  }
  componentDidMount(){
      console.log("B didMount")
  }
}

export default LifecycleB;
