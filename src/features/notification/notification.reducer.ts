import * as notificationActions from './notification.action'
import { combineReducers } from 'redux'
import { ActionType, getType } from 'typesafe-actions'
import { Notification } from './notification.model'

export type NotificationState = {
  notifications: Notification[]
  isInProgress: boolean
  error: string | null
}

export type NotificationAction = ActionType<typeof notificationActions>

export default combineReducers<NotificationState, NotificationAction>({
  isInProgress: (state = false, action) => {
    switch (action.type) {
      case getType(notificationActions.add):
      case getType(notificationActions.fetch):
        return true

      default:
        return state
    }
  },
  notifications: (state = [], action) => {
    switch (action.type) {
      case getType(notificationActions.addSuccess):
        return [...state, action.payload]
      case getType(notificationActions.fetchSuccess):
        return [...action.payload]

      default:
        return state
    }
  },
  error: (state = null, action) => {
    switch (action.type) {
      case getType(notificationActions.addFailure):
      case getType(notificationActions.fetchFailure):
        return action.payload

      default:
        return state
    }
  },
})
