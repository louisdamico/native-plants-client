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
          <Card border="info" style={{ width: '18rem' }}>
            <Card.Header><h4>{favorite.list_name}</h4></Card.Header>
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text>
                <h5>State: </h5>{favorite.state}<br/>
                <h5>EcoRegion: </h5>{favorite.ecoregion}<br/>
                <h5>Species: </h5>{favorite.type}<br/>
                <h5>Common Name: </h5>{favorite.common_name}<br/>
              </Card.Text>
              <Link to={`/favorites/${favorite.id}`}>
                <OutlineButton variant='outline-primary' type="button">See List</OutlineButton></Link>
            </Card.Body>
          </Card>
        </div>
      ))
      return favorite
    }
    return (
      <div className='Card'>
        <Container>
          <Row md={4}>
            <Col>{favorite}</Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default withRouter(Favorite)
