import { NotificationConfigState } from './notificationConfig.reducer'

export const getNotificationConfigs = (state: NotificationConfigState) =>
  state.notificationConfigs
