import React, { Component } from 'react'
import '../styles/App.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      number: '',
      people: []
    }
  }

  _name = e => {
    e.preventDefault()
    this.setState({ name: e.target.value })
  }

  _email = e => {
    e.preventDefault()
    this.setState({ email: e.target.value })
  }

  _phone = e => {
    e.preventDefault()
    this.setState({ number: e.target.value })
  }

  _password = e => {
    e.preventDefault()
    this.setState({ password: e.target.value })
  }

  _submit = e => {
    e.preventDefault()

    const newPerson = {
      name: this.state.name,
      email: this.state.email,
      number: this.state.number
    }

    const people = this.state.people
    people.push(newPerson)
    e.target.reset()

    this.setState({
      name: this.state.name,
      email: this.state.email,
      number: this.state.number
    })
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this._submit}>
          <div>
            <label>Name: </label>
            <input onChange={this._name} type="text" placeholder="Name goes here" />
          </div>
          <div>
            <label>Email: </label>
            <input onChange={this._email} type="email" placeholder="Email" />
          </div>
          <div>
            <label>Phone: </label>
            <input onChange={this._phone} type="tel" placeholder="Phone Number" />
          </div>
          <div>
            <label>Create Password: </label>
            <input onChange={this._password} type="password" placeholder="Password here" />
          </div>
          <div>
            <input type="submit" />
          </div>
        </form>
        <div />
      </div>
    )
  }
}

export default App
