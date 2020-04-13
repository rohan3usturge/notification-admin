import { createStandardAction } from 'typesafe-actions'
import { Tenant } from './tenant.model'
import {
  ADD,
  FETCH,
  ADD_SUCCESS,
  ADD_FAILURE,
  FETCH_SUCCESS,
  FETCH_FAILURE,
} from './tenant.constants'

export const add = createStandardAction(ADD)<string>()
export const addSuccess = createStandardAction(ADD_SUCCESS)<Tenant>()
export const addFailure = createStandardAction(ADD_FAILURE)<string>()

export const fetch = createStandardAction(FETCH)<undefined>()
export const fetchSuccess = createStandardAction(FETCH_SUCCESS)<Tenant[]>()
export const fetchFailure = createStandardAction(FETCH_FAILURE)<string>()
