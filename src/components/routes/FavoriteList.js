import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import OutlineButton from 'react-bootstrap/Button'
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
    const { handleChange } = this

    if (updated) {
      return <Redirect to={'/favorites-states'} />
    }
    return (
      <div className="col-sm-10 col-md-8 mx-auto my-5 p-4 zone-chart">
        <div className="row">
          <Form>
            <h3>Make New List:</h3><br/>
            <label>List Name</label><br/>
            <input
              placeholder='type list name'
              defaultValue={favorite.list_name}
              required
              name='list_name'
              onChange={handleChange}
            /><br/>
            <OutlineButton onClick={this.handleClick}>Start List</OutlineButton>
          </Form>
        </div>
      </div>
    )
  }
}
export default withRouter(FavoriteList)
