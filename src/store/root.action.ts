import { routerActions } from 'react-router-redux'
import { TenantsActions } from '../features/tenants'
import { ChannelActions } from '../features/channels'
import { EventTypeActions } from '../features/eventTypes'
import { NotificationActions } from '../features/notification'
import { NotificationConfigActions } from '../features/notificationConfig'

export default {
  router: routerActions,
  tenants: TenantsActions,
  channels: ChannelActions,
  eventTypes: EventTypeActions,
  notifications: NotificationActions,
  notificationConfigs: NotificationConfigActions,
}
