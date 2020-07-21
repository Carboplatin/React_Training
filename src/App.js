import React, { Component } from 'react';
// import { BrowserRouter, Route } from 'react-router-dom'
import Window from './window';
import Navbar from './navbar';
import './index.css'

class App extends Component {
  render() {
    return (
      <div className='content'>
        <div>
          <Navbar/>
        </div>
        <div>
            <h2>NEWS PAGE</h2>
            <Window/>            
        </div>
      </div>
    );
  }
}

export default App;
