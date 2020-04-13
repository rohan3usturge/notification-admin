import React from 'react'
import './eventType.scss'
import { EventTypeModels } from '../../../features/eventTypes'
import { TenantsModels } from '../../../features/tenants'

type Props = {
  eventTypes: EventTypeModels.EventType[]
  tenants: TenantsModels.Tenant[]
  add: (name: string) => void
  fetch: () => void
}

type State = {
  eventType?: string
}

export default class EventTypeComponent extends React.Component<Props, State> {
  /**
   *
   */
  constructor(props: Props) {
    super(props)
    this.state = { eventType: '' }
    this.addEventType = this.addEventType.bind(this)
    this.handleEventTypeNameChange = this.handleEventTypeNameChange.bind(this)
    this.props.fetch()
  }

  addEventType(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!this.state.eventType) {
      return
    }
    this.props.add(this.state.eventType)
    this.setState({ eventType: '' })
  }

  handleEventTypeNameChange(event: React.FormEvent<HTMLInputElement>) {
    const eventType = event.currentTarget.value
    this.setState({ eventType })
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="mt-md-5">
          <div className="card">
            <div className="card-header">Existing EventType</div>
            <div className="card-body">
              <table className="table table-sm table-borderless">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">EventType Name</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.eventTypes.map((eventType) => (
                    <tr key={eventType.id}>
                      <th scope="row">{eventType.id}</th>
                      <td>{eventType.name}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="mt-md-5">
          <div className="card">
            <div className="card-header">Add a EventType</div>
            <div className="card-body">
              <form onSubmit={this.addEventType}>
                <div className="form-group row">
                  <label
                    htmlFor="selectBoxForTenant"
                    className="col-sm-2 col-form-label"
                  >
                    Tenant Name
                  </label>
                  <div className="col-sm-10">
                    <select className="custom-select" id="selectBoxForTenant">
                      <option>Choose...</option>
                      {this.props.tenants.map((tenant) => (
                        <option value={tenant.id}>{tenant.name}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="inputForEventTypeName"
                    className="col-sm-2 col-form-label"
                  >
                    EventType Name
                  </label>
                  <div className="col-sm-10">
                    <input
                      id="inputForEventTypeName"
                      type="text"
                      className="form-control"
                      placeholder="EventType Name"
                      aria-label="EventType Name"
                      aria-describedby="basic-addon1"
                      value={this.state.eventType}
                      onChange={this.handleEventTypeNameChange}
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
