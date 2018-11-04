import React from 'react'
import { Segment, Container } from 'semantic-ui-react'

const CallToActionInfo= () => (
  <div>
    <div className='header'>How can you get involved?</div>
  <Container className='cta'>
    <Segment inverted color='green'>
      <p>Read a book with a child and share cookies</p>
    </Segment>
    <Segment inverted color='teal'>
      <p>Learn something new form a different culture</p>
    </Segment>
    <Segment inverted color='blue'>
      <p>Share a meal together</p>
    </Segment>
    <Segment inverted color='violet'>
    <p> Checkout local events together</p>
    </Segment>
    <Segment inverted color='purple'>
      <p>Help navigate local systems</p>
    </Segment>
    <Segment inverted color='pink'>
      <p>Go Dancing!</p>
    </Segment>
  </Container>
  </div>
)

export default CallToActionInfo
