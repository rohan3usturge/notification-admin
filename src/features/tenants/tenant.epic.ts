import { RootAction, RootState, Services } from 'MyTypes'
import { Epic } from 'redux-observable'
import { of } from 'rxjs'
import { filter, map, switchMap, catchError } from 'rxjs/operators'
import { isOfType } from 'typesafe-actions'
import { TenantsActions, TenantsConstants } from '.'

export const add: Epic<RootAction, RootAction, RootState, Services> = (
  action$,
  state$,
  { TenantService }
) =>
  action$.pipe(
    filter(isOfType(TenantsConstants.ADD)),
    map((action) => {
      return action.payload
    }),
    switchMap((payload) => {
      return TenantService.add(payload, true)
    }),
    map((tenant) => TenantsActions.addSuccess(tenant))
  )

export const fetch: Epic<RootAction, RootAction, RootState, Services> = (
  action$,
  state$,
  { TenantService }
) =>
  action$.pipe(
    filter(isOfType(TenantsConstants.FETCH)),
    switchMap(() => {
      return TenantService.fetch(true)
    }),
    map((tenants) => TenantsActions.fetchSuccess(tenants)),
    catchError((err) => {
      console.log({ err })
      return of(TenantsActions.fetchFailure(err))
    })
  )
