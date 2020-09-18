import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import EditFavoriteForm from '../shared/EditFavoriteForm'
// import Favorite from '../shared/Favorite'
import apiUrl from '../../apiConfig'
import axios from 'axios'
import { withRouter } from 'react-router'
import messages from '../AutoDismissAlert/messages'

class FavoriteEdit extends Component {
  constructor (props) {
    super(props)

    this.state = {
      favorite: {
        state: '',
        ecoregion: '',
        type: '',
        common_name: ''
      },
      updated: false
    }
  }
  componentDidMount () {
    axios(`${apiUrl}/favorites/${this.props.match.params.id}/`, {
      method: 'GET',
      headers: {
        'Authorization': `Token ${this.props.user.token}`
      }
    })
      .then(res => this.setState({ favorite: res.data.favorite }))
      .catch(console.error)
  }

  handleChange = event => {
    event.persist()

    this.setState(prevState => {
      const updatedField = { [event.target.name]: event.target.value }

      const editedFavorite = Object.assign({}, prevState.favorite, updatedField)
      return { favorite: editedFavorite }
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    axios({
      url: `${apiUrl}/favorites/${this.props.match.params.id}/`,
      method: 'PATCH',
      headers: {
        'Authorization': `Token ${this.props.user.token}`
      },
      data: { favorite: this.state.favorite }
    })
      .then(res => this.setState({ updated: true }))
      .then(res => this.props.msgAlert({
        heading: 'List Edited Successfully',
        message: messages.listEditedSuccess,
        variant: 'success'
      }))
      .catch(() => this.props.msgAlert({
        heading: 'List Edit Failed',
        message: messages.listEditFailure,
        variant: 'danger'
      }))
  }

  render () {
    // destructure book to show in the form below, and createdId to redirect
    const { favorite, updated } = this.state
    const { handleChange, handleSubmit } = this

    // when the user hits submit to finish editing the book
    if (updated) {
      // redirect to the show page (route)
      return <Redirect to={`/favorites/${this.props.match.params.id}/`} />
    }

    return (
      <div>
        <EditFavoriteForm
          favorite={favorite}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          cancelPath={`/favorites/${this.props.match.params.id}/`}
        />
      </div>
    )
  }
}

export default withRouter(FavoriteEdit)

// .then(() => this.props.history.push('/'))
