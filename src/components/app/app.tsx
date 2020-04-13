import React from 'react'
import './app.css'
import Header from './header'
import Home from './home'
import Channels from './channel'
import EventTypes from './eventType'
import NotificationConfig from './notificationConfig'
import Notifications from './notifications'
import Tenants from './tenants'
import { BrowserRouter as Router, Route } from 'react-router-dom'

export default class AppComponent extends React.Component<any, any> {
  render() {
    return (
      <Router>
        <div className="container">
          <Header />
          <div className="row">
            <Route exact path="/" component={Home} />
            <Route exact path="/tenants" component={Tenants} />
            <Route exact path="/channels" component={Channels} />
            <Route exact path="/eventtypes" component={EventTypes} />
            <Route exact path="/notifications" component={Notifications} />
            <Route
              exact
              path="/notiChannelConfig"
              component={NotificationConfig}
            />
          </div>
        </div>
      </Router>
    )
  }
}
