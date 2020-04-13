import { createStandardAction } from 'typesafe-actions'
import { EventType } from './eventType.model'
import {
  ADD,
  FETCH,
  ADD_SUCCESS,
  ADD_FAILURE,
  FETCH_SUCCESS,
  FETCH_FAILURE,
} from './eventType.constants'

export const add = createStandardAction(ADD)<string>()
export const addSuccess = createStandardAction(ADD_SUCCESS)<EventType>()
export const addFailure = createStandardAction(ADD_FAILURE)<string>()

export const fetch = createStandardAction(FETCH)<undefined>()
export const fetchSuccess = createStandardAction(FETCH_SUCCESS)<EventType[]>()
export const fetchFailure = createStandardAction(FETCH_FAILURE)<string>()
