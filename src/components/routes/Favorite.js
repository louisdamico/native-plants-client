import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
// import OutlineButton from '../shared/OutlineButton.js'
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
          <h4> Client List </h4>
          {favorite.state}
          {favorite.ecoregion}
          {favorite.type}
          {favorite.common_name}
        </div>
      ))
      return favorite
    }
    return (
      <div className='long'>
        <h1>Favorites</h1>
        {favorite}
      </div>
    )
  }
}

export default withRouter(Favorite)
