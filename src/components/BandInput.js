// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ""
    }
    this.handleOnSubmit = this.handleOnSubmit.bind(this)
    this.handleOnChange = this.handleOnChange.bind(this)
  }

  handleOnChange(e){
    this.setState({
      name: e.target.value
    })
  }
  
  
  handleOnSubmit(e) {
    e.preventDefault()
    if (this.state.name !== "") {
      this.props.addBand(this.state)
      this.setState({
        name: ""
      })
    }
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input type="text" name="name" value={this.state.name} onChange={this.handleOnChange} placeholder="Enter Band Name"></input>
          <input type="submit"></input>
        </form>
      </div>
    )
  }
}

export default BandInput
