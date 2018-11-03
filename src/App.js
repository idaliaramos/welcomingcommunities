import React, { Component } from 'react';
// import Card from './components/CardComponent'
import './App.css';
import CulturePage from './components/CulturePage'
import Map from './components/Map'
console.log(Map,"<<<map")
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Map />
          <CulturePage/>
        </header>
      </div>
    );
  }
}

export default App;
