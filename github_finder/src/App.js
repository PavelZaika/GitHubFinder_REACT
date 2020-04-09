import React, { Component } from 'react';
import './App.css';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Navbar from './components/layout/Navbar';
import axios from 'axios';

class App extends Component {
  state = {
    users: [],
    loading: false
  };

  //If we want to see some users before search it should be uncomment
  // async componentDidMount() {
  //   this.setState({ loading: true });

  //   const res = await axios.get(
  //     `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );
  //   this.setState({ users: res.data, loading: false });
  // }

  //Search github users
  searchUsers = async text => {
    this.setState({ loading: true });

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data.items, loading: false });
  };

  render() {
    const NavBarTitle = 'GitHub Finder';
    return (
      <div className='App'>
        <Navbar title={NavBarTitle} icon='fab fa-github' />
        <div className='container'>
          <Search searchUsers={this.searchUsers} />
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
