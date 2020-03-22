import React from 'react'

export class Login extends React.Component {

  state = {
    username: '',
    password: ''
  }

  handleInput = (field) => ({ target: { value } }) => {
    this.setState({
      [field]: value
    })
  }

  handleLogin = () => {
    const { login } = this.props
    const { username, password } = this.state
    const shouldLogin = !!username && !!password
    shouldLogin && login({ username, password })
  }

  render() {
    return (
      <div className="modal-wrapper" >
        <div className="modal">
          <h1>Вхід в систему</h1>
          <form>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Ім'я користувача</label>
              <input className="form-control" placeholder="ім'я" onChange={this.handleInput('username')} />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Пароль</label>
              <input type="password" className="form-control" placeholder="пароль" onChange={this.handleInput('password')} />
            </div>
            <button type="button" className="btn btn-primary" onClick={this.handleLogin}>Вхід</button>
          </form>
        </div>
      </div>
    )
  }

}
