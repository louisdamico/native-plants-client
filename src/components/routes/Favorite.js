import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import OutlineButton from 'react-bootstrap/Button'
import apiUrl from '../../apiConfig'
import axios from 'axios'
import { withRouter } from 'react-router'

class Favorite extends Component {
  constructor (props) {
    super(props)
    this.state = {
      favorite: []
    }
  }

  componentDidMount () {
    axios({
      url: `${apiUrl}/favorites/`,
      method: 'GET',
      headers: {
        'Authorization': `Token ${this.props.user.token}`
      }
    })
      .then(res => this.setState({ favorite: res.data.favorite }))
      .catch(console.error)
  }

  render () {
    const favorite = null
    if (this.state.favorite) {
      const favorite = this.state.favorite.map(favorite => (
        <div key={favorite.id}>
          <div className="row">
            <div className="mx-auto mt-5">
              <Card border="info" style={{ width: '18rem' }}>
                <Card.Header><h4>{favorite.list_name}</h4></Card.Header>
                <Card.Body>
                  <Card.Title></Card.Title>
                  <Card.Text>
                    State: {favorite.state}<br/>
                    EcoRegion: {favorite.ecoregion}<br/>
                    Species: {favorite.type}<br/>
                    Common Name: {favorite.common_name}<br/>
                  </Card.Text>
                  <Link to={`/favorites/${favorite.id}`}>
                    <OutlineButton variant='outline-primary' type="button">See List</OutlineButton></Link>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      ))
      return favorite
    }
    return (
      <div className='Card'>
        <Container>
          <Row className="justify-content-md-center">
            <Col md='auto'className="justify-content-center">{favorite}</Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default withRouter(Favorite)
