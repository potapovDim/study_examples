import React, {Component} from 'react'
import {login} from '../api/api'

class Login extends Component {
  state = {
    username: '',
    password: ''
  }

  changeFiels = (filed) => (value) => this.setState({...this.state, [filed]: value})


  render() {
    return (
      <div>
        <div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Ваш імейл</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={this.changeFiels('username')} />
            {/*<small id="emailHelp" className="form-text text-muted">Підказка</small> */}
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Ваше ім'я</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={this.changeFiels('username')} />
            {/*<small id="emailHelp" className="form-text text-muted">Підказка</small> */}
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Ваше ім'я</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={this.changeFiels('username')} />
            {/*<small id="emailHelp" className="form-text text-muted">Підказка</small> */}
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Ваш пароль</label>
            <input type="password" className="form-control" id="exampleInputPassword1" onChange={this.changeFiels('password')} />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Повторіть пароль</label>
            <input type="password" className="form-control" id="exampleInputPassword1" onChange={this.changeFiels('password')} />
          </div>
          <button className="btn btn-primary" onClick={this.submitLogin}>Вхід</button>
        </div>
      </div>
    )
  }
}


export {
  Login
}