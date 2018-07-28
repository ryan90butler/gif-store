import React, { Component } from 'react';
import axios from 'axios';
import './Login.css';

class Login extends Component {
  constructor(){
    super()
    this.state={
      email: '',
      password: '',
      firstName: '',
      lastName: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  registerOrLogin(e, login){
    e.preventDefault();
    axios.post(`/api/${login}`, {email: this.state.email, password: this.state.password, firstName: this.state.firstName, lastName: this.state.lastName})
      .then((r)=>{
        if(r.data.success){
          this.props.history.push('/dashboard')
        }else{
          alert("password of email is incorrect")
        }
      }).catch(err => {
        console.warn(err)
      })
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render(){
    const isEnabled = this.state.email.length > 0 && this.state.password.length > 0
    return(
      <div className="Login">
        <div className="login-form">
        <form onSubmit={(event)=>{this.registerOrLogin(event, 'register')}} >
        <div>
        <h2>Login</h2>
        <label>First Name</label>
        <br/>
        <input className="login-input"  name="firstName" value={this.state.firstName} onChange={this.handleChange} type="text"/>
    </div>
    <div>
        <label>Last Name</label>
        <br/>
        <input className="login-input"  name="lastName" value={this.state.lastName} onChange={this.handleChange} type="text"/>
    </div>
    <div>
        <label>Email</label>
        <br/>
        <input className="login-input"  name="email" value={this.state.email} onChange={this.handleChange} type="email"/>
    </div>
    <div>
        <label>Password</label>
        <br/>
        <input className="login-input" name="password" value={this.state.password} onChange={this.handleChange} type="password"/>
    </div>
    <div className="login-button">
    <button disabled={!isEnabled}>Login</button>
    <button onClick={(event)=>{this.registerOrLogin(event, 'register')}} className="sign-up-button">Create An Account</button>
    <br/>
    <button onClick={this.register}>Register</button>
    </div>
    </form>
        </div>
      </div>
    )
  }
}

export default Login;