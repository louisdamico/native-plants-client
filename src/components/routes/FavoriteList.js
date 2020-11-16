import React, { Component } from 'react'
// import { Redirect } from 'react-router-dom'
// import Form from 'react-bootstrap/Form'
import FavoriteListForm from '../shared/FavoriteListForm'
import FavoriteStatesForm from '../shared/FavoriteStatesForm'// import OutlineButton from 'react-bootstrap/Button'
import { withRouter } from 'react-router'

class FavoriteList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      favorite: {
        list_name: '',
        state: '',
        ecoregion: '',
        type: '',
        common_name: ''
      }
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
  // const whatever = () {
  //   if else
  // }
  render () {
    const { handleChange, handleClick, favorite } = this.state

    return (
      <div>
        <FavoriteListForm
          onChange={handleChange}
          favorite={favorite}
          // show={whatever}
          cancelPath='/'
        />
        <FavoriteStatesForm
          onClick={handleClick}
          handleChange={handleChange}
          cancelPath='/'
        />
      </div>
    )
  }
}
export default withRouter(FavoriteList)
// list_name={this.state.list_name}
