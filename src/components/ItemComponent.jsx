import React from 'react'
import { Image, Header } from 'semantic-ui-react'

const ItemComponent = (props) => (

<div>
<Header as='h3'>{props.title}</Header>
<div className='img-wrap'>
<Image src={props.image} size='medium' rounded />
<div className='img-description'>
{props.description}
</div>
</div>
</div>
)

export default ItemComponent
