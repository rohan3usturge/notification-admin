import { RootState } from 'MyTypes'
import { connect } from 'react-redux'
import {
  NotificationSelectors,
  NotificationActions,
} from '../../../features/notification'
import NotificationComponent from './notifications'
import { EventTypeSelectors } from '../../../features/eventTypes'

const mapStateToProps = (state: RootState) => ({
  notifications: NotificationSelectors.getNotifications(state.notifications),
  eventTypes: EventTypeSelectors.getEventTypes(state.eventTypes),
})

const mapDispatchProps = {
  add: NotificationActions.add,
  fetch: NotificationActions.fetch,
}

export default connect(
  mapStateToProps,
  mapDispatchProps
)(NotificationComponent)
