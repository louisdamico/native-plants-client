import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import OutlineButton from 'react-bootstrap/Button'
import apiUrl from '../../apiConfig'
import axios from 'axios'
import { withRouter } from 'react-router'
import Dropdown from 'react-bootstrap/Dropdown'
import messages from '../AutoDismissAlert/messages'

class FavoriteOne extends Component {
  constructor (props) {
    super(props)
    this.state = {
      favorite: null,
      deleted: false
    }
  }

  componentDidMount () {
    axios({
      url: `${apiUrl}/favorites/${this.props.match.params.id}/`,
      method: 'GET',
      headers: {
        'Authorization': `Token ${this.props.user.token}`
      }
    })
      // .then(res => console.log(this.state.favorite))
      .then(res => this.setState({ favorite: res.data.favorite }))
      .catch(console.error)
  }
  destroyList = () => {
    axios({
      url: `${apiUrl}/favorites/${this.props.match.params.id}/`,
      method: 'DELETE',
      headers: {
        'Authorization': `Token ${this.props.user.token}`
      }
    })
      .then(() => this.setState({ deleted: true }))
      .then(res => this.props.msgAlert({
        heading: 'List Deleted Successfully',
        message: messages.ListDeleteSuccess,
        variant: 'success'
      }))
      .catch(console.error)
  }

  render () {
    if (this.state.deleted) {
      return <Redirect to={ '/favorites'
      } />
    }

    let favorite = ''
    if (this.state.favorite) {
      favorite = (
        <div key={this.state.favorite.id}>
          <h4>{this.state.favorite.list_name}</h4><br/>
          <h5>State: </h5>{this.state.favorite.state}<br/>
          <h5>EcoRegion: </h5>{this.state.favorite.ecoregion}<br/>
          <h5>Species: </h5>{this.state.favorite.type}<br/>
          <h5>Common Name: </h5>{this.state.favorite.common_name}<br/>
          <Link to={`/favorites-edit/${this.props.match.params.id}`}>
            <OutlineButton variant='outline-primary' type="button">Edit List</OutlineButton></Link>
          <Link to={'/favorites'}>
            <OutlineButton variant='outline-secondary' type="button">Cancel</OutlineButton></Link>
          <Dropdown>
            <Dropdown.Toggle variant="outline-danger" id="dropdown-basic">
              Delete List
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={this.destroyList}>🛑  Permently Delete 🛑</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      )
    }
    return (
      <div className='long'>
        <h1>Favorites</h1>
        {favorite}
      </div>
    )
  }
}

export default withRouter(FavoriteOne)
