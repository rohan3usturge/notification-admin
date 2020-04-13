import * as tenantActions from './tenant.action'
import { combineReducers } from 'redux'
import { ActionType, getType } from 'typesafe-actions'
import { Tenant } from './tenant.model'

export type TenantState = {
  tenants: Tenant[]
  isInProgress: boolean
  error: string | null
}

export type TenantAction = ActionType<typeof tenantActions>

export default combineReducers<TenantState, TenantAction>({
  isInProgress: (state = false, action) => {
    switch (action.type) {
      case getType(tenantActions.add):
      case getType(tenantActions.fetch):
        return true

      default:
        return state
    }
  },
  tenants: (state = [], action) => {
    switch (action.type) {
      case getType(tenantActions.addSuccess):
        return [...state, action.payload]
      case getType(tenantActions.fetchSuccess):
        return [...action.payload]

      default:
        return state
    }
  },
  error: (state = null, action) => {
    switch (action.type) {
      case getType(tenantActions.addFailure):
      case getType(tenantActions.fetchFailure):
        let payload = action.payload
        return payload

      default:
        return state
    }
  },
})
