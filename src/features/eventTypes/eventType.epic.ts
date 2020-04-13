import { RootAction, RootState, Services } from 'MyTypes'
import { Epic } from 'redux-observable'
import { filter, map, switchMap } from 'rxjs/operators'
import { isOfType } from 'typesafe-actions'
import { EventTypeActions, EventTypeConstants } from '.'

// contrived example!!!
export const add: Epic<RootAction, RootAction, RootState, Services> = (
  action$,
  state$,
  { EventTypeService }
) =>
  action$.pipe(
    filter(isOfType(EventTypeConstants.ADD)),
    map((action) => {
      return action.payload
    }),
    switchMap((payload) => {
      return EventTypeService.add(payload, true)
    }),
    map((eventType) => {
      return EventTypeActions.addSuccess(eventType)
    })
  )

export const fetch: Epic<RootAction, RootAction, RootState, Services> = (
  action$,
  state$,
  { EventTypeService }
) =>
  action$.pipe(
    filter(isOfType(EventTypeConstants.FETCH)),
    switchMap(() => {
      return EventTypeService.fetch(true)
    }),
    map((eventTypes) => {
      return EventTypeActions.fetchSuccess(eventTypes)
    })
  )
