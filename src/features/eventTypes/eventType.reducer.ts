import * as eventTypeActions from './eventType.action'
import { combineReducers } from 'redux'
import { ActionType, getType } from 'typesafe-actions'
import { EventType } from './eventType.model'

export type EventTypeState = {
  eventTypes: EventType[]
  isInProgress: boolean
  error: string | null
}

export type EventTypeAction = ActionType<typeof eventTypeActions>

export default combineReducers<EventTypeState, EventTypeAction>({
  isInProgress: (state = false, action) => {
    switch (action.type) {
      case getType(eventTypeActions.add):
      case getType(eventTypeActions.fetch):
        return true

      default:
        return state
    }
  },
  eventTypes: (state = [], action) => {
    switch (action.type) {
      case getType(eventTypeActions.addSuccess):
        return [...state, action.payload]
      case getType(eventTypeActions.fetchSuccess):
        return [...action.payload]

      default:
        return state
    }
  },
  error: (state = null, action) => {
    switch (action.type) {
      case getType(eventTypeActions.addFailure):
      case getType(eventTypeActions.fetchFailure):
        return action.payload

      default:
        return state
    }
  },
})
