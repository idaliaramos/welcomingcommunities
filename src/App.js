import React, { Component } from 'react';
// import Card from './components/CardComponent'
import './App.css';
import LandingPage from './components/LandingPage'
import CulturePage from './components/CulturePage'
import Map from './components/Map'
var api_key = process.env.API_KEY;


class App extends Component {
  state={
    data:[],
  }
  data = async () => {
    let data = await fetch('https:api.airtable.com/v0/appQVHyUAtu8PtEYC/CountryInfo?maxRecords=3&view=Grid%20view',{
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer keyvXxrgLJDpKDquk`
    }
  }
)
  let res = await data.json();
  let countryInfo = res.records.map(e => e.fields)
  this.setState({data: countryInfo})
  }
  componentDidMount() {
    this.data()
    }
  render() {

    return (
      <div className="App">
        <header className="App-header">

         <LandingPage/>
        </header>

          <CulturePage countries={this.state.data}/>

      </div>
    );
  }
}

export default App;
