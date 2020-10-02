import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
// import Form from 'react-bootstrap/Form'
import FavoriteListForm from '../shared/FavoriteListForm'
// import OutlineButton from 'react-bootstrap/Button'
import { withRouter } from 'react-router'

class FavoriteList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      favorite: {
        list_name: ''
      },
      updated: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick = event => {
    event.persist()

    this.setState(prevState => {
      const updatedField = { [event.target.name]: event.target.value }
      const editedFavorite = Object.assign({}, prevState.favorite, updatedField)

      return {
        favorite: editedFavorite
      }
    })
  }

  render () {
    const { favorite, updated } = this.state
    const { handleChange, handleClick } = this

    if (updated) {
      return <Redirect to={'/favorites-states'} />
    }
    return (
      <div>
        <FavoriteListForm
          favorite={favorite}
          handleChange={handleChange}
          handleClick={handleClick}
          cancelPath='/'
        />
      </div>
    )
  }
}
export default withRouter(FavoriteList)
