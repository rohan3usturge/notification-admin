import { RootState } from 'MyTypes'
import { connect } from 'react-redux'
import { TenantsSelectors, TenantsActions } from '../../../features/tenants'
import TenantsComponent from './tenants'

const mapStateToProps = (state: RootState) => ({
  tenants: TenantsSelectors.getTenants(state.tenants),
  error: TenantsSelectors.getError(state.tenants),
})

const mapDispatchProps = {
  add: TenantsActions.add,
  fetch: TenantsActions.fetch,
}

export default connect(mapStateToProps, mapDispatchProps)(TenantsComponent)
