import React, { Component } from 'react';
import './Login.scss'

class Login extends Component {
  constructor(){
    super()
    this.state={
      email: '',
      password: ''
    }
  }
  render(){
    return(
      <div>
        <div className="login-form">
        <form>
          <p>email</p>
          <input type="email"/>
          <a href='/auth/google'>loginbutton</a>
          </form>
        </div>
      </div>
    )
  }
}

export default Login;