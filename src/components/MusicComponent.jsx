import React from 'react'
import { Header} from 'semantic-ui-react'

const MusicComponent = (props) => (

<div>
<Header as='h3'>{props.title}</Header>
<iframe width="400" height="300"
src={props.source}>

</iframe>
</div>
)

export default MusicComponent
