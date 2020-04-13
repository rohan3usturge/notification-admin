import { RootState } from 'MyTypes'
import { connect } from 'react-redux'
import {
  EventTypeSelectors,
  EventTypeActions,
} from '../../../features/eventTypes'
import EventTypeComponent from './eventType'
import { TenantsSelectors } from '../../../features/tenants'

const mapStateToProps = (state: RootState) => ({
  eventTypes: EventTypeSelectors.getEventTypes(state.eventTypes),
  tenants: TenantsSelectors.getTenants(state.tenants),
})

const mapDispatchProps = {
  add: EventTypeActions.add,
  fetch: EventTypeActions.fetch,
}

export default connect(
  mapStateToProps,
  mapDispatchProps
)(EventTypeComponent)
