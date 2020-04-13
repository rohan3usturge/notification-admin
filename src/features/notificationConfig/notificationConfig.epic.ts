import { RootAction, RootState, Services } from 'MyTypes'
import { Epic } from 'redux-observable'
import { filter, map, switchMap } from 'rxjs/operators'
import { isOfType } from 'typesafe-actions'
import { NotificationConfigActions, NotificationConfigConstants } from '.'

// contrived example!!!
export const add: Epic<RootAction, RootAction, RootState, Services> = (
  action$,
  state$,
  { NotificationConfigService }
) =>
  action$.pipe(
    filter(isOfType(NotificationConfigConstants.ADD)),
    map((action) => {
      return action.payload
    }),
    switchMap((payload) => {
      return NotificationConfigService.add(payload, true)
    }),
    map((notificationConfig) => {
      return NotificationConfigActions.addSuccess(notificationConfig)
    })
  )

export const fetch: Epic<RootAction, RootAction, RootState, Services> = (
  action$,
  state$,
  { NotificationConfigService }
) =>
  action$.pipe(
    filter(isOfType(NotificationConfigConstants.FETCH)),
    switchMap(() => {
      return NotificationConfigService.fetch(true)
    }),
    map((notificationConfigs) => {
      return NotificationConfigActions.fetchSuccess(notificationConfigs)
    })
  )
