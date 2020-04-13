import { combineEpics } from 'redux-observable'
import { TenantsEpics } from '../features/tenants'
import { ChannelEpics } from '../features/channels'
import { EventTypeEpics } from '../features/eventTypes'
import { NotificationEpics } from '../features/notification'
import { NotificationConfigEpics } from '../features/notificationConfig'

export default combineEpics(
  ...Object.values(TenantsEpics),
  ...Object.values(ChannelEpics),
  ...Object.values(EventTypeEpics),
  ...Object.values(NotificationEpics),
  ...Object.values(NotificationConfigEpics)
)
