import React from 'react'
import { Grid, Container ,Divider, Header} from 'semantic-ui-react'
import ItemComponent from './ItemComponent'
import MusicComponent from './MusicComponent'
const CountrySegmentComponent = ({country}) => (
  <div>
    <Container className='left'>
  <Header as='h2' >{country.Country}</Header>
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
