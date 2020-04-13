import { RootAction, RootState, Services } from 'MyTypes'
import { Epic } from 'redux-observable'
import { filter, map, switchMap } from 'rxjs/operators'
import { isOfType } from 'typesafe-actions'
import { NotificationActions, NotificationConstants } from '.'

// contrived example!!!
export const add: Epic<RootAction, RootAction, RootState, Services> = (
  action$,
  state$,
  { NotificationService }
) =>
  action$.pipe(
    filter(isOfType(NotificationConstants.ADD)),
    map((action) => {
      return action.payload
    }),
    switchMap((payload) => {
      return NotificationService.add(payload, true)
    }),
    map((notification) => {
      return NotificationActions.addSuccess(notification)
    })
  )

export const fetch: Epic<RootAction, RootAction, RootState, Services> = (
  action$,
  state$,
  { NotificationService }
) =>
  action$.pipe(
    filter(isOfType(NotificationConstants.FETCH)),
    switchMap(() => {
      return NotificationService.fetch(true)
    }),
    map((notifications) => {
      return NotificationActions.fetchSuccess(notifications)
    })
  )
