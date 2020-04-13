import React from 'react'
import './tenants.scss'
import { TenantsModels } from '../../../features/tenants'

type Props = {
  tenants: TenantsModels.Tenant[]
  error: string | null
  add: (name: string) => void
  fetch: () => void
}

type State = {
  tenant?: string
}

export default class TenantsComponent extends React.Component<Props, State> {
  /**
   *
   */
  constructor(props: Props) {
    super(props)
    this.state = { tenant: '' }
    this.addTenant = this.addTenant.bind(this)
    this.handleTenantNameChange = this.handleTenantNameChange.bind(this)
  }

  componentDidMount() {
    this.props.fetch()
  }

  addTenant(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!this.state.tenant) {
      return
    }
    this.props.add(this.state.tenant)
    this.setState({ tenant: '' })
  }

  handleTenantNameChange(event: React.FormEvent<HTMLInputElement>) {
    const tenant = event.currentTarget.value
    this.setState({ tenant })
  }

  render() {
    return (
      <div className="container-fluid">
        <h1>{this.props.error && this.props.error.toString()}</h1>
        <div className="mt-md-5">
          <div className="card">
            <div className="card-header">Existing Tenants</div>
            <div className="card-body">
              <table className="table table-sm table-borderless">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Tenant Name</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.tenants.map((tenant) => (
                    <tr key={tenant.id}>
                      <th scope="row">{tenant.id}</th>
                      <td>{tenant.name}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="mt-md-5">
          <div className="card">
            <div className="card-header">Add a Tenant</div>
            <div className="card-body">
              <form onSubmit={this.addTenant}>
                <div className="form-group row">
                  <label
                    htmlFor="inputFortenantName"
                    className="col-sm-2 col-form-label"
                  >
                    Tenant Name
                  </label>
                  <div className="col-sm-10">
                    <input
                      id="inputFortenantName"
                      type="text"
                      className="form-control"
                      placeholder="Tenant Name"
                      aria-label="Tenant Name"
                      aria-describedby="basic-addon1"
                      value={this.state.tenant}
                      onChange={this.handleTenantNameChange}
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
