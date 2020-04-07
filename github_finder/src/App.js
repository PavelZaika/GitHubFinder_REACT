import React, { Component } from 'react';
import './App.css';
import UserItem from './components/users/UserItem';
import Navbar from './components/layout/Navbar';

class App extends Component {
  render() {
    const NavBarTitle = 'GitHub Finder';
    return (
      <div className='App'>
        <Navbar title={NavBarTitle} icon='fab fa-github' />
        <UserItem />
      </div>
    );
  }
}

export default App;
