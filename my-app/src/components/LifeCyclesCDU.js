import React, { Component } from 'react'
import LifeCyclesCDUChild from './LifeCyclesCDUChild'

export class LifeCyclesCDU extends Component {
    constructor(props) {
        console.log("Constructor called")
        super(props)
        this.state = {
            greeting: "hello"
        }
    }

    updateGreeting = () => {
        console.log("update greeting called")
        this.setState(prevState => {
            return {
                greeting: prevState.greeting === "hello" ? "Goodbye" : "hello"
            }
        })
    }

    componentDidUpdate() {
        console.log("component updated")
    }

  render() {
    console.log("Render method called")
    return (
      <div>
        <h1>{this.state.greeting}</h1>
        <button onClick={this.updateGreeting}>Update greeting</button>
        <LifeCyclesCDUChild />
      </div>
    )
  }
}

export default LifeCyclesCDU