import React from 'react';
import { TextField, Button } from '@material-ui/core';
import NavBar from './components/NavBar';
import Dashboard from './components/Dashboard';
import './App.css';

class App extends React.Component {
  state = {
    username: '',
    password: '',
    loggedIn: false,
  }

  inputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  login = (event) => {
    this.setState({
      username: '',
      password: '',
      loggedIn: true,
    })
  }

  render() {
    return (
      <div>
        <NavBar />

        {this.state.loggedIn ? <Dashboard /> : (
         <div className="form-container">
          <form className="login-form" onSubmit={this.login}>
            <TextField 
              label="Username" 
              type="text" 
              value={this.state.username} 
              onChange={this.inputChange} 
              name="username" 
              required 
            />
            <TextField 
              label="Password" 
              type="password" 
              value={this.state.password} 
              onChange={this.inputChange} 
              name="password" 
              required 
            />
            <br/>
            <Button variant="contained" color="primary" type="submit">LOGIN</Button>
          </form>
        </div>
        )}
        
      </div>
    )
  }
}

export default App;