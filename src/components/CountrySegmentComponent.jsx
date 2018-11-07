// /* eslint-disable max-len */
//
// import React from 'react'
// import { Container, Header,Item, Embed} from 'semantic-ui-react'
// import ItemComponent from './ItemComponent'
//
// const CountrySegmentComponent = ({country}) => {
//   return <div>
//     <Container >
//       <Header>{country.Country}</Header>
//       <Item>{country.Description}</Item>
//       {/* <div className='row'> */}
//       <ItemComponent title='Food' description={country.FoodDescription} image={country.FoodImage}/>
//       <ItemComponent title='Art' description={country.Artdescription} image={country.ArtImage}/>
//       <ItemComponent title='Music' description={country.musicdescription} image={country.Music}/>
//        {/* <Embed id='O6Xo21L0ybE' placeholder='/images/image-16by9.png' source='https://www.youtube.com/watch?v=U9qmsX4c78Y' /> */}
//      {/* </div> */}
//     </Container>
//   </div>
// }
//
// export default CountrySegmentComponent

import React from 'react'
import { Grid, Container ,Divider} from 'semantic-ui-react'
import ItemComponent from './ItemComponent'
import MusicComponent from './MusicComponent'
const CountrySegmentComponent = ({country}) => (
  <div>
    <Container>
  <h1 className='left'>{country.Country}</h1>
   <p>{country.Description}</p>
       <Divider hidden />
  <Grid>
    <Grid.Row columns={3}>
      <Grid.Column>
       <ItemComponent title='Food' description={country.FoodDescription} image={country.FoodImage}/>
      </Grid.Column>
          <Divider hidden />
      <Grid.Column>
        <ItemComponent title='Art' description={country.Artdescription} image={country.ArtImage}/>
      </Grid.Column>
          <Divider hidden />
      <Grid.Column>
        <MusicComponent title='Music' source={country.Music}/>
      </Grid.Column>
    </Grid.Row>
  </Grid>
   <Divider hidden />
  </Container>
  </div>
)

export default CountrySegmentComponent
