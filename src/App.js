import React, { Component } from 'react';
import Card from './components/CardComponent'
import './App.css';
import CulturePage from './components/CulturePage'
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <CulturePage/>
        </header>
      </div>
    );
  }
}

export default App;
