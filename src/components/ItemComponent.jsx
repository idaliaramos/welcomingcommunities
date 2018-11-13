import React from 'react'
import { Image, Header, H3 } from 'semantic-ui-react'

const ItemComponent = (props) => (

<div>
<h3>{props.title}</h3>
<div className='img-wrap'>
<Image src={props.image} size='medium' rounded />
<div className='img-description'>
{props.description}
</div>
</div>
</div>
)

export default ItemComponent
