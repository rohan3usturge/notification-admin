import React from 'react'
import './notifications.scss'
import { NotificationModels } from '../../../features/notification'
import { EventTypeModels } from '../../../features/eventTypes'

type Props = {
  notifications: NotificationModels.Notification[]
  eventTypes: EventTypeModels.EventType[]
  add: (name: string) => void
  fetch: () => void
}

type State = {
  notification?: string
}

export default class NotificationComponent extends React.Component<
  Props,
  State
> {
  /**
   *
   */
  constructor(props: Props) {
    super(props)
    this.state = { notification: '' }
    this.addNotification = this.addNotification.bind(this)
    this.handleNotificationNameChange = this.handleNotificationNameChange.bind(
      this
    )
    this.props.fetch()
  }

  addNotification(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!this.state.notification) {
      return
    }
    this.props.add(this.state.notification)
    this.setState({ notification: '' })
  }

  handleNotificationNameChange(event: React.FormEvent<HTMLInputElement>) {
    const notification = event.currentTarget.value
    this.setState({ notification })
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="mt-md-5">
          <div className="card">
            <div className="card-header">Existing Notification</div>
            <div className="card-body">
              <table className="table table-sm table-borderless">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Notification Name</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.notifications.map((notification) => (
                    <tr key={notification.id}>
                      <th scope="row">{notification.id}</th>
                      <td>{notification.name}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="mt-md-5">
          <div className="card">
            <div className="card-header">Add a Notification</div>
            <div className="card-body">
              <form onSubmit={this.addNotification}>
                <div className="form-group row">
                  <label
                    htmlFor="selectBoxForEventType"
                    className="col-sm-2 col-form-label"
                  >
                    EventType Name
                  </label>
                  <div className="col-sm-10">
                    <select
                      className="custom-select"
                      id="selectBoxForEventType"
                    >
                      <option>Choose...</option>
                      {this.props.eventTypes.map((eventType) => (
                        <option value={eventType.id}>{eventType.name}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="inputForNotificationName"
                    className="col-sm-2 col-form-label"
                  >
                    Notification Name
                  </label>
                  <div className="col-sm-10">
                    <input
                      id="inputForNotificationName"
                      type="text"
                      className="form-control"
                      placeholder="Notification Name"
                      aria-label="Notification Name"
                      aria-describedby="basic-addon1"
                      value={this.state.notification}
                      onChange={this.handleNotificationNameChange}
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-sm btn-secondary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
