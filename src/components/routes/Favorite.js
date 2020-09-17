import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import apiUrl from '../../apiConfig'
import axios from 'axios'

class Favorite extends Component {
  constructor (props) {
    super(props)
    this.state = {
      favorite: null,
      deleted: false
    }
  }

  componentDidMount () {
    axios({
      url: `${apiUrl}/favorite/${this.props.owner.id}`,
      method: 'GET',
      headers: {
        // 'Authorization': `Bearer ${this.props.user.token}`
      }
    })
      .then(res => this.setState({ post: res.data.post }))
      .catch(console.error)
  }
}
export default withRouter(Favorite)
