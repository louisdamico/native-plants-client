import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import FavoriteStatesForm from '../shared/FavoriteStatesForm'
// import Form from 'react-bootstrap/Form'
// import OutlineButton from 'react-bootstrap/Button'
import { withRouter } from 'react-router'

class FavoriteStates extends Component {
  constructor (props) {
    super(props)
    this.state = {
      favorite: {
        list_name: this.favorite.list_name,
        state: this.favorite.state
      }
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    event.persist()
    this.setState(prevState => {
      return {
        favorite: this.state.favorite.state
      }
    })
  }

  render () {
    const { favorite, updated } = this.state
    const { handleChange, handleSubmit } = this

    if (updated) {
      return <Redirect to={'/favorites-create'} />
    }

    return (
      <div>
        <FavoriteStatesForm
          favorite={favorite}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          cancelPath='/'
        />
      </div>
    )
  }
}
export default withRouter(FavoriteStates)
