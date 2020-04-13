import * as notificationConfigActions from './notificationConfig.action'
import { combineReducers } from 'redux'
import { ActionType, getType } from 'typesafe-actions'
import { NotificationConfig } from './notificationConfig.model'

export type NotificationConfigState = {
  notificationConfigs: NotificationConfig[]
  isInProgress: boolean
  error: string | null
}

export type NotificationConfigAction = ActionType<
  typeof notificationConfigActions
>

export default combineReducers<
  NotificationConfigState,
  NotificationConfigAction
>({
  isInProgress: (state = false, action) => {
    switch (action.type) {
      case getType(notificationConfigActions.add):
      case getType(notificationConfigActions.fetch):
        return true

      default:
        return state
    }
  },
  notificationConfigs: (state = [], action) => {
    switch (action.type) {
      case getType(notificationConfigActions.addSuccess):
        return [...state, action.payload]
      case getType(notificationConfigActions.fetchSuccess):
        return [...action.payload]

      default:
        return state
    }
  },
  error: (state = null, action) => {
    switch (action.type) {
      case getType(notificationConfigActions.addFailure):
      case getType(notificationConfigActions.fetchFailure):
        return action.payload

      default:
        return state
    }
  },
})
