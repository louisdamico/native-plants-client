import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'

import AuthenticatedRoute from '../AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from '../AutoDismissAlert/AutoDismissAlert'
import Header from '../Header/Header'
import Home from '../routes/Home'
import SignUp from '../SignUp/SignUp'
import SignIn from '../SignIn/SignIn'
import SignOut from '../SignOut/SignOut'
import Favorite from '../routes/Favorite'
import FavoriteOne from '../routes/FavoriteOne'
import FavoriteEdit from '../routes/FavoriteEdit'
import FavoriteCreate from '../routes/FavoriteCreate'
import ChangePassword from '../ChangePassword/ChangePassword'

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      msgAlerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  msgAlert = ({ heading, message, variant }) => {
    this.setState({ msgAlerts: [...this.state.msgAlerts, { heading, message, variant }] })
  }

  render () {
    const { msgAlerts, user } = this.state

    return (
      <Fragment>
        <Header user={user} />
        {msgAlerts.map((msgAlert, index) => (
          <AutoDismissAlert
            key={index}
            heading={msgAlert.heading}
            variant={msgAlert.variant}
            message={msgAlert.message}
          />
        ))}
        <main className="container">
          <Route exact path='/' component={Home} />
          <Route path='/sign-up' render={() => (
            <SignUp msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut msgAlert={this.msgAlert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword msgAlert={this.msgAlert} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/favorites-create' render={ () => (
            <FavoriteCreate user={user} msgAlert={this.msgAlert} setCreatedId={this.setCreatedId}/>
          )}/>
          <AuthenticatedRoute user={user} exact path='/favorites-edit/:id' render={ (props) => (
            <FavoriteEdit {...props} user={user} msgAlert={this.msgAlert} setUpdated={this.setUpdated}/>
          )}/>
          <AuthenticatedRoute user={user} exact path='/favorites' render={ (props) => (
            <Favorite {...props} user={user} msgAlert={this.msgAlert}/>
          )}/>
          <AuthenticatedRoute user={user} exact path='/favorites/:id' render={ (props) => (
            <FavoriteOne {...props} user={user} msgAlert={this.msgAlert} setDeleted={this.setDeleted}/>
          )}/>
        </main>
      </Fragment>
    )
  }
}

export default App
