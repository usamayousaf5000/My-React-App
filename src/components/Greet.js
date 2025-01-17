import React, { Component } from 'react'

class Greet extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: false
      }
    }

    getGreetMessage = () => {
        if (this.state.isLoggedIn) {
            return (<h1>Welcome Usama</h1>)
        }else{
            return (<h1>Welcome Ahmed</h1>)
        }
    }
    
  render() {
    
    return (
        <>
        {this.state.isLoggedIn  === false && <h1>Welcome Usama</h1>}
        </>
    )
    // if(this.state.isLoggedIn)
    // {
    //     return <h1>Welcome Usama</h1>
    // }else {
    //     return <h1>Welcome Ahmed</h1>
    // }
}
}

export default Greet
