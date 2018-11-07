import React, { Component } from 'react';
import CountrySegmentComponent from './CountrySegmentComponent'
import { Container } from 'semantic-ui-react'
class CulturePage extends Component {
  render() {
    let data= this.props.countries
    return (
      <div>
        <Container>
          <div className='header center'>Explore the Beauty of their Countries</div>
      <br/>
        <br/>
        <div>
        {data.map(country=> <CountrySegmentComponent country={country}/> )}
        </div>
      </Container>
      </div>

    );
  }
}

export default CulturePage;
