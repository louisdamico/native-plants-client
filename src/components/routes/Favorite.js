import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import OutlineButton from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import apiUrl from '../../apiConfig'
import axios from 'axios'
import { withRouter } from 'react-router'
import messages from '../AutoDismissAlert/messages'

class Favorite extends Component {
  constructor (props) {
    super(props)
    this.state = {
      favorite: [],
      deleted: false
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
      // .then(console.log(this.props.data))
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
    const favorite = null
    if (this.state.favorite) {
      const favorite = this.state.favorite.map(favorite => (
        <div key={favorite.id}>
          <h4> List: </h4>
          {favorite.state}<br/>
          {favorite.ecoregion}<br/>
          {favorite.type}:<br/>
          {favorite.common_name}<br/>
          <OutlineButton variant='outline-primary' onClick={ Redirect } to={`/favorites/${this.props.match.params.id}`}>See List</OutlineButton>
          <Dropdown>
            <Dropdown.Toggle variant="outline-danger" id="dropdown-basic">
              Delete List
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={this.destroyList}> 🛑  Permently Delete🛑</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      ))
      return favorite
    }
    // return <Redirect to='/favorites-create' />
    return (
      <div className='long'>
        <h1>Create New List</h1>
        {favorite}
      </div>
    )
  }
}

export default withRouter(Favorite)

// onClick={() => this.destroyList(favorite.id)}
// <OutlineButton variant= "outline-danger" onClick={this.destroyList}>Delete List</OutlineButton>
