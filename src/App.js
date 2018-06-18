import React, { Component } from 'react';
import './App.css';
import UserList from "./components/user/userList";
import Container from "./components/container";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container />
      </div>
    );
  }
}

export default App;
