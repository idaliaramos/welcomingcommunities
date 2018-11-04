import React, { Component } from 'react';
// import Card from './components/CardComponent'
import './App.css';
import CulturePage from './components/CulturePage'
<<<<<<< HEAD
import LandingPage from './components/LandingPage'
=======
import Map from './components/Map'
var api_key = process.env.API_KEY;


>>>>>>> bc437fa36ee09ddeefbdf9571a7ca80d490e2cc3
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
<<<<<<< HEAD
         <LandingPage/>
          {/* <CulturePage/> */}
=======
        <Map />
          <CulturePage/>
>>>>>>> bc437fa36ee09ddeefbdf9571a7ca80d490e2cc3
        </header>
      </div>
    );
  }
}

export default App;
