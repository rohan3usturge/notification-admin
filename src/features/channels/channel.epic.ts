import { RootAction, RootState, Services } from 'MyTypes'
import { Epic } from 'redux-observable'
import { filter, map, switchMap } from 'rxjs/operators'
import { isOfType } from 'typesafe-actions'
import { ChannelActions, ChannelConstants } from '.'

export const add: Epic<RootAction, RootAction, RootState, Services> = (
  action$,
  state$,
  { ChannelService }
) =>
  action$.pipe(
    filter(isOfType(ChannelConstants.ADD)),
    map((action) => {
      return action.payload
    }),
    switchMap((payload) => {
      return ChannelService.add(payload, true)
    }),
    map((channel) => {
      return ChannelActions.addSuccess(channel)
    })
  )

export const fetch: Epic<RootAction, RootAction, RootState, Services> = (
  action$,
  state$,
  { ChannelService }
) =>
  action$.pipe(
    filter(isOfType(ChannelConstants.FETCH)),
    switchMap(() => {
      return ChannelService.fetch(true)
    }),
    map((channels) => {
      return ChannelActions.fetchSuccess(channels)
    })
  )
