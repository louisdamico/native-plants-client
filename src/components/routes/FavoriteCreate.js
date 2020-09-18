import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import FavoriteForm from '../shared/FavoriteForm'
import apiUrl from '../../apiConfig'
import axios from 'axios'
import { withRouter } from 'react-router'
import messages from '../AutoDismissAlert/messages'

class FavoriteCreate extends Component {
  constructor (props) {
    super(props)

    this.state = {
      favorite: {
        state: '',
        ecoregion: '',
        type: '',
        common_name: ''
      },
      createdId: null
    }
  }

  handleChange = event => {
    event.persist()

    this.setState(prevState => {
      const updatedField = { [event.target.name]: event.target.value }

      const editedPost = Object.assign({}, prevState.favorite, updatedField)
      return { favorite: editedPost }
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    axios({
      url: `${apiUrl}/favorites/`,
      method: 'POST',
      headers: {
        'Authorization': `Token ${this.props.user.token}`
      },
      data: { favorite: this.state.favorite }
    })
      // .then(res => console.log(res.data))
      .then(res => {
        this.props.msgAlert({
          heading: 'Favorite Created Successfully',
          message: messages.favoriteCreatedSuccess,
          variant: 'success'
        })
        return res
      })
      .then(res => this.setState({ createdId: res.data.favorite.id }))
      .catch(res => this.props.msgAlert({
        heading: 'Favorite Create Failed',
        message: messages.favoriteCreatedFailure,
        variant: 'danger'
      }))
  }
  render () {
    const { favorite, createdId } = this.state
    const { handleChange, handleSubmit } = this

    if (createdId) {
      return <Redirect to={`/favorites/${createdId}`} />
    }

    return (
      <div>
        <FavoriteForm
          favorite={favorite}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          cancelPath='/'
        />
      </div>
    )
  }
}

export default withRouter(FavoriteCreate)
