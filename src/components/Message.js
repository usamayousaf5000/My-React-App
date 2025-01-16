import React, { Component } from 'react'

class Message extends Component {
    constructor(){
        super()
        this.state = {
            message: "Welcome Usama",
            count : 0
        }
}
changeMessage(){
    this.setState({
        message:"Thanks for Clicking the button"
    },()=>console.log(this.state.message))
}
increment(){
    this.setState({
        count : this.state.count + 1
    },()=>console.log(this.state.count))
}
decrement(){
    this.setState({
        count: this.state.count - 1
    },()=>console.log(this.state.count))
}
  render() {
        return (
            <>
        <h1>{this.state.message}</h1>
        <button onClick={()=>{this.changeMessage()}}>Subscribe</button>
        <h1>Count - {this.state.count} </h1>
        <button onClick={()=>{this.increment()}}>Increment</button>
        <button onClick={()=>{this.decrement()}}>Decrement</button>
        </>
    )
  }
}

export default Message