import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           username:'',
           comments:'',
           hobbies:''
        }
      }
      nameChangeHandler=event=>{
        this.setState({
            username:event.target.value
        })
      }

      commentsChangeHandler=event=>{
          this.setState({
              comments:event.target.value
          })
      }
      hobbiesChangeHandler=event=>{
          this.setState({
              hobbies:event.target.value
          })
        }
      submitHandler=event=>{
          alert(`${this.state.username} ${this.state.hobbies} ${this.state.comments}`)
      }
      
      
  render() {
     const {username,comments,hobbies} =this.state
    return (<div>
            <form onSubmit={this.submitHandler}>
                <div>
                <label>Name:</label>
                <input type="text" value={username} onChange={this.nameChangeHandler}></input>
                </div>

                <div>
                <label>Comments:</label>
                <textarea value={comments} onChange={this.commentsChangeHandler}></textarea>
                </div>

                <div>
                <label>Hobbies:</label>
                <select value={hobbies} onChange={this.hobbiesChangeHandler}>
                    <option></option>
                    <option>Coding</option>
                    <option>Singing</option>
                    <option>Dancing</option>
                </select>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
    </div>)
  }
}

export default Form;
