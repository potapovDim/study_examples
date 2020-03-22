import React, {Component} from 'react'
import {Login} from './components/login'

const apps = {
  Login
}

class Root extends Component {

  state = {
    currentState: 'Login'
  }

  changeState = (stateVal) => {
    this.setState({currentState: stateVal})
  }


  login = (user) => {
    this.setState({user})
      .then()
  }


  render() {
    const {currentState} = this.state
    const App = apps[currentState]
    return (
      <div>
        <div className="header">
          header
          <button className="btn btn-primary">Увійти </button>
          <button className="btn btn-success">Зареєструватися</button>
        </div>
        <App changeState={this.changeState} />
      </div>
    )
  }
}

export default Root