import React, { Component } from 'react';
// import Card from './components/CardComponent'
import './App.css';
import CulturePage from './components/CulturePage'
import Map from './components/Map'
var api_key = process.env.API_KEY;


class App extends Component {
  state={
    data:[],
  }
  data = async () => {
    let data = await fetch(`https://api.airtable.com/v0/appQVHyUAtu8PtEYC/CountryInfo?${api_key}`)
    let res = await data.json();
    console.log(res, "<<<res")
  }
  componentDidMount() {
    this.data()
    }
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
