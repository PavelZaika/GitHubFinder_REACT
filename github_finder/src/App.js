import React, { Component } from 'react';
import './App.css';
import Users from './components/users/Users';
import Navbar from './components/layout/Navbar';

class App extends Component {
  render() {
    const NavBarTitle = 'GitHub Finder';
    return (
      <div className='App'>
        <Navbar title={NavBarTitle} icon='fab fa-github' />
        <div className='container'>
          <Users />
        </div>
      </div>
    );
  }
}

export default App;
