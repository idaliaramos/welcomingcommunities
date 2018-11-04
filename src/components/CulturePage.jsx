import React, { Component } from 'react';
import CountrySegmentComponent from './CountrySegmentComponent'
// import './App.css';
import CardComponent from './CardComponent'
class CulturePage extends Component {
  render() {

    let data= this.props
    console.log(data, 'data')
    return (
      <div className="CulturePage">
        <header className="culture-header">

      {/* <CountrySegmentComponent/> */}
      { this.props.countries ? this.props.countries.map(country=>
      <CardComponent country={country}/>)
     : ''}
        </header>
      </div>
    );
  }
}

export default CulturePage;
