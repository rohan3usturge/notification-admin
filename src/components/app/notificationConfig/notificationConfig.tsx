import React from 'react'
import './notificationConfig.scss'
import { NotificationConfigModels } from '../../../features/notificationConfig'
import { ChannelModels } from '../../../features/channels'
import { NotificationModels } from '../../../features/notification'

type Props = {
  notifications: NotificationModels.Notification[]
  notificationConfigs: NotificationConfigModels.NotificationConfig[]
  channels: ChannelModels.Channel[]
  add: (name: string) => void
  fetch: () => void
}

type State = {
  notificationConfig?: string
}

export default class NotificationConfigComponent extends React.Component<
  Props,
  State
> {
  /**
   *
   */
  constructor(props: Props) {
    super(props)
    this.state = { notificationConfig: '' }
    this.addNotificationConfig = this.addNotificationConfig.bind(this)
    this.handleNotificationConfigNameChange = this.handleNotificationConfigNameChange.bind(
      this
    )
    this.props.fetch()
  }

  addNotificationConfig(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!this.state.notificationConfig) {
      return
    }
    this.props.add(this.state.notificationConfig)
    this.setState({ notificationConfig: '' })
  }

  handleNotificationConfigNameChange(
    event: React.FormEvent<HTMLTextAreaElement>
  ) {
    event.preventDefault()
    const notificationConfig = event.currentTarget.value
    this.setState({ notificationConfig })
    var obj = JSON.parse(notificationConfig)
    var pretty = JSON.stringify(obj, undefined, 4)
    event.currentTarget.value = pretty
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="mt-md-5">
          <div className="card">
            <div className="card-header">Existing NotificationConfig</div>
            <div className="card-body">
              <table className="table table-sm table-borderless">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">NotificationConfig Name</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.notificationConfigs.map((notificationConfig) => (
                    <tr key={notificationConfig.id}>
                      <th scope="row">{notificationConfig.id}</th>
                      <td>{notificationConfig.name}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="mt-md-5">
          <div className="card">
            <div className="card-header">Add a NotificationConfig</div>
            <div className="card-body">
              <form onSubmit={this.addNotificationConfig}>
                <div className="form-group row">
                  <label
                    htmlFor="selectBoxForChannel"
                    className="col-sm-2 col-form-label"
                  >
                    Notification Name
                  </label>
                  <div className="col-sm-10">
                    <select className="custom-select" id="selectBoxForChannel">
                      <option>Choose...</option>
                      {this.props.notifications.map((notification) => (
                        <option value={notification.id}>
                          {notification.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="selectBoxForChannel"
                    className="col-sm-2 col-form-label"
                  >
                    Channel Name
                  </label>
                  <div className="col-sm-10">
                    <select className="custom-select" id="selectBoxForChannel">
                      <option>Choose...</option>
                      {this.props.channels.map((Channel) => (
                        <option value={Channel.id}>{Channel.name}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="inputForNotificationConfigName"
                    className="col-sm-2 col-form-label"
                  >
                    Notification Config
                  </label>
                  <div className="col-sm-10">
                    <textarea
                      id="inputForNotificationConfigName"
                      className="form-control"
                      placeholder="NotificationConfig Name"
                      aria-label="NotificationConfig Name"
                      aria-describedby="basic-addon1"
                      value={this.state.notificationConfig}
                      onChange={this.handleNotificationConfigNameChange}
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
