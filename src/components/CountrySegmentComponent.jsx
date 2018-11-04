/* eslint-disable max-len */

import React from 'react'
import { Container, Header, Card, Image } from 'semantic-ui-react'
import CardComponent from './CardComponent'

const CountrySegmentComponent = () => (
  <div>
    <Container fluid>

      
<Header as='h2'>Congo Republic</Header>
  <p>The Democratic Republic of the Congo is the second largest country in Africa. It borders nine countries: Angola, Burundi, the Central African Republic, the Republic of Congo, Rwanda, South Sudan, Tanzania, Uganda, and Zambia.

    The people of the DRC represent over 200 ethnic groups, with nearly 250 languages and dialects spoken throughout the country. Kinshasa, the capital, is the second largest French-speaking city in the world.
    Since the 1960s, the Congolese have endured over two decades of armed conflict with over 5.4 million people dead due to war-related causes, making it the deadliest conflict since World War II.
    Congolese armed groups and elements of the army have a long, brutal history of recruiting child soldiers. The United Nations report at least 1,000 cases of child soldier recruitment between January 2012 and August 2013.
    The oldest national park in Africa is the Congo’s Virunga National Park. It is home to rare mountain gorillas, lions, and elephants. The park is currently under threat by the UK oil company, Soco, which has begun oil exploration there.
   </p>
  <Card>
    <Card.Content>
      <Card.Header>Food</Card.Header>
          <Image src='https://bit.ly/2sj6hdq' />
      <Card.Meta>
      </Card.Meta>
      <Card.Description>Learn about the Congolese culture .</Card.Description>
    </Card.Content>
    <Card.Content extra>
    </Card.Content>
  </Card>

    </Container>
  </div>
)

export default CountrySegmentComponent
