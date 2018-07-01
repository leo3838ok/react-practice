import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import UserFrom from './components/UserForm';

class App extends Component {
  state = {
    repos: null,
    error: null
  }

  getUser = (e) => {
    e.preventDefault();
    const user = e.target.elements.username.value;
    if (user) {
      axios.get(`https://api.github.com/users/${user}`)
      .then((response) => {
        const repos = response.data.public_repos;
        this.setState({
          repos,
          error: null
        });
      })
      .catch((error) => {
        this.setState({
          repos: null,
          error: "User not exist."
        });
      });
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Http Calls in React</h1>
        </header>
        <UserFrom getUser={this.getUser} />
        { this.state.repos ? <p>Number of repos: { this.state.repos }</p> : <p>Please enter a username.</p> }
        { this.state.error && <p>{ this.state.error }</p> }
      </div>
    );
  }
}

export default App;
