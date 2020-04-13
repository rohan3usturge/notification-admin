import * as channelActions from './channel.action'
import { combineReducers } from 'redux'
import { ActionType, getType } from 'typesafe-actions'
import { Channel } from './channel.model'

export type ChannelState = {
  channels: Channel[]
  isInProgress: boolean
  error: string | null
}

export type ChannelAction = ActionType<typeof channelActions>

export default combineReducers<ChannelState, ChannelAction>({
  isInProgress: (state = false, action) => {
    switch (action.type) {
      case getType(channelActions.add):
      case getType(channelActions.fetch):
        return true

      default:
        return state
    }
  },
  channels: (state = [], action) => {
    switch (action.type) {
      case getType(channelActions.addSuccess):
        return [...state, action.payload]
      case getType(channelActions.fetchSuccess):
        return [...action.payload]

      default:
        return state
    }
  },
  error: (state = null, action) => {
    switch (action.type) {
      case getType(channelActions.addFailure):
      case getType(channelActions.fetchFailure):
        return action.payload

      default:
        return state
    }
  },
})
