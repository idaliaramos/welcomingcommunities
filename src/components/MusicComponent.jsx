import React from 'react'
import { Header} from 'semantic-ui-react'

const MusicComponent = (props) => (

<div>
<h3 className='left' >{props.title}</h3>
<iframe width="400" height="300"
src={props.source}>

</iframe>
</div>
)

export default MusicComponent
