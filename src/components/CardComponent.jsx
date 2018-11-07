import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const CardComponent = (props) => (
  <Card>
    <Card.Content>
      <Card.Header>{props.FoodDescription}</Card.Header>
          <Image src={props.ArtImage} />
      <Card.Meta>
      </Card.Meta>
      <Card.Description>{props.Description}</Card.Description>
    </Card.Content>
    <Card.Content extra>
    </Card.Content>
  </Card>
)

export default CardComponent
