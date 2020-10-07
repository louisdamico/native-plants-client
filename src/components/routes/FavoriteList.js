import React, { Component } from 'react'
// import { Redirect } from 'react-router-dom'
// import Form from 'react-bootstrap/Form'
import FavoriteListForm from '../shared/FavoriteListForm'
import FavoriteStatesForm from '../shared/FavoriteStatesForm'// import OutlineButton from 'react-bootstrap/Button'
import { withRouter } from 'react-router'

class FavoriteList extends Component {
  constructor (props) {
    super(props)
    this.state = null
  }
  render () {
    const { handleChange, handleClick } = this.props

    return (
      <div>
        <FavoriteListForm
          handleChange={handleChange}
          cancelPath='/'
        />
        <FavoriteStatesForm
          list_name={this.state.list_name}
          onClick={handleClick}
          handleChange={handleChange}
          cancelPath='/'
        />
      </div>
    )
  }
}
export default withRouter(FavoriteList)
