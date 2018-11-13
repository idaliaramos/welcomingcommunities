import React, { Component } from 'react';
import CountrySegmentComponent from './CountrySegmentComponent'
import { Container, Header} from 'semantic-ui-react'
class CulturePage extends Component {
  render() {
    let data= this.props.countries
    return (
      <div>
        <Container>
          <h1 className='header center'>Explore the Beauty of their Countries</h1>
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
