import React, { Component } from 'react';
import CountrySegmentComponent from './CountrySegmentComponent'
// import './App.css';

class CulturePage extends Component {
  render() {
    return (
      <div className="CulturePage">
        <header className="culture-header">
        <CountrySegmentComponent/>
        </header>
      </div>
    );
  }
}

export default CulturePage;
