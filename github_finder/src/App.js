import React, { Fragment, Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const name = 'Your Name';
    const loading = false;
    const showName = true;
    return (
      <div className='App'>
        {loading ? (
          <h4>Loading...</h4>
        ) : (
          <h1>Hello from React, {showName && name}</h1>
        )}
      </div>
    );
  }
}

export default App;
