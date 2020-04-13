import React from 'react'
import './channel.scss'
import { ChannelModels } from '../../../features/channels'

type Props = {
  channels: ChannelModels.Channel[]
  add: (name: string) => void
  fetch: () => void
}

type State = {
  channel?: string
}

export default class ChannelComponent extends React.Component<Props, State> {
  /**
   *
   */
  constructor(props: Props) {
    super(props)
    this.state = { channel: '' }
    this.addChannel = this.addChannel.bind(this)
    this.handleChannelNameChange = this.handleChannelNameChange.bind(this)
    this.props.fetch()
  }

  addChannel(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!this.state.channel) {
      return
    }
    this.props.add(this.state.channel)
    this.setState({ channel: '' })
  }

  handleChannelNameChange(event: React.FormEvent<HTMLInputElement>) {
    const channel = event.currentTarget.value
    this.setState({ channel })
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="mt-md-5">
          <div className="card">
            <div className="card-header">Existing Channel</div>
            <div className="card-body">
              <table className="table table-sm table-borderless">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Channel Name</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.channels.map((channel) => (
                    <tr key={channel.id}>
                      <th scope="row">{channel.id}</th>
                      <td>{channel.name}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="mt-md-5">
          <div className="card">
            <div className="card-header">Add a Channel</div>
            <div className="card-body">
              <form onSubmit={this.addChannel}>
                <div className="form-group row">
                  <label
                    htmlFor="inputForChannelName"
                    className="col-sm-2 col-form-label"
                  >
                    Channel Name
                  </label>
                  <div className="col-sm-10">
                    <input
                      id="inputForChannelName"
                      type="text"
                      className="form-control"
                      placeholder="Channel Name"
                      aria-label="Channel Name"
                      aria-describedby="basic-addon1"
                      value={this.state.channel}
                      onChange={this.handleChannelNameChange}
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
