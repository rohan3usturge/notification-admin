import { RootState } from 'MyTypes'
import { connect } from 'react-redux'
import {
  NotificationConfigSelectors,
  NotificationConfigActions,
} from '../../../features/notificationConfig'
import NotificationConfigComponent from './notificationConfig'
import { ChannelSelectors } from '../../../features/channels'
import { NotificationSelectors } from '../../../features/notification'

const mapStateToProps = (state: RootState) => ({
  notificationConfigs: NotificationConfigSelectors.getNotificationConfigs(
    state.notificationConfigs
  ),
  notifications: NotificationSelectors.getNotifications(state.notifications),
  channels: ChannelSelectors.getChannels(state.channels),
})

const mapDispatchProps = {
  add: NotificationConfigActions.add,
  fetch: NotificationConfigActions.fetch,
}

export default connect(
  mapStateToProps,
  mapDispatchProps
)(NotificationConfigComponent)
