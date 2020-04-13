import React from 'react'
import './header.scss'
import { Link } from 'react-router-dom'
import { AuthService } from '../../../services/auth.service'

export default class HeaderComponent extends React.Component {
  private authService: AuthService

  /**
   *
   */
  constructor(props: any) {
    super(props)
    this.authService = new AuthService()
    this.login = this.login.bind(this)
  }

  async login() {
    await this.authService.login()
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="/">
          Notification Management
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link active" to="/tenants">
              Tenants
            </Link>
            <Link className="nav-item nav-link active" to="/channels">
              Channels
            </Link>
            <Link className="nav-item nav-link active" to="/eventtypes">
              Event Types
            </Link>
            <Link className="nav-item nav-link active" to="/notifications">
              Notifications
            </Link>
            <Link className="nav-item nav-link active" to="/notiChannelConfig">
              Config
            </Link>
          </div>
        </div>
        <button type="button" className="btn btn-primary" onClick={this.login}>
          Login
        </button>
      </nav>
    )
  }
}
