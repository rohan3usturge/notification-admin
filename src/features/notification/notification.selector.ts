import { NotificationState } from './notification.reducer'

export const getNotifications = (state: NotificationState) =>
  state.notifications
