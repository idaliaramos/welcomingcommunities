import React from 'react'
import { Segment, Container, Modal, Button } from 'semantic-ui-react'

const CallToActionInfo= () => (
  <div>

  <Container className='cta'>
    <h1 className='header center'>How can you get involved?</h1>
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
  <Modal trigger={<Button color='orange' size='massive'>Join Us!</Button>}>
    <Modal.Header >Get Involved</Modal.Header>

     <Modal.Content>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLScGlPX7DhNrSbsibAcO_JCbMr74JAJLQSKxwLpOc0OnWD9VuA/viewform?embedded=true"
        width="640"
        height="947"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
      >
        Loading...
      </iframe>
    </Modal.Content>
  </Modal>
  </div>
)

export default CallToActionInfo
