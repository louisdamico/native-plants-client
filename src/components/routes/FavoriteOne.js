import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import OutlineButton from 'react-bootstrap/Button'
import apiUrl from '../../apiConfig'
import axios from 'axios'
import { withRouter } from 'react-router'
// import messages from '../AutoDismissAlert/messages'

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

  render () {
    let favorite = ''
    if (this.state.favorite) {
      favorite = (
        <div key={this.state.favorite.id}>
          <h4> List: </h4>
          {this.state.favorite.state}<br/>
          {this.state.favorite.ecoregion}<br/>
          {this.state.favorite.type}:<br/>
          {this.state.favorite.common_name}<br/>
          <OutlineButton variant='outline-index' type="submit" onClick= { Redirect } to='/favorite-edit/:id'>Edit List</OutlineButton>
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
