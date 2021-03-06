import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Button,
  Container,
  Header,
  Icon,
} from 'semantic-ui-react'

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
const LandingPage = ({ mobile }) => (

  <Container text >
    {/* <div className='background-home'></div> */}

    <Header
      as='h1'
      content='Welcoming Commmunity'
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em',
      }}
    />
    <Header
      as='h1'
      content='In a time of division, we must unite,care, and learn from each other'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',

      }}
    />
    <Button color='teal' size='huge'>
      Join Us!
      <Icon name='right arrow' />
    </Button>
  </Container>
)
export default LandingPage
