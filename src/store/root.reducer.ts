import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { TenantsReducer } from '../features/tenants'
import { ChannelReducer } from '../features/channels'
import { EventTypeReducer } from '../features/eventTypes'
import { NotificationReducer } from '../features/notification'
import { NotificationConfigReducer } from '../features/notificationConfig'

const rootReducer = combineReducers({
  router: routerReducer,
  tenants: TenantsReducer,
  channels: ChannelReducer,
  eventTypes: EventTypeReducer,
  notifications: NotificationReducer,
  notificationConfigs: NotificationConfigReducer,
})

export default rootReducer
