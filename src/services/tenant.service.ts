import axios from 'axios'
import { from, Observable, of } from 'rxjs'
import { map } from 'rxjs/operators'
import { TenantsModels } from '../features/tenants'
import { v4 } from 'uuid'

const url = 'http://localhost:7071/api/tenants'

const mockArray: TenantsModels.Tenant[] = []

export function add(name: string, fromMock = false) {
  if (!fromMock) {
    const promise = axios.post<TenantsModels.Tenant>(url, {
      name,
    })
    return from(promise).pipe(map((value) => value.data))
  }

  const returnO = {
    id: v4(),
    name,
  }
  mockArray.push(returnO)
  return of(returnO)
}

export function fetch(fromMock = false) {
  if (!fromMock) {
    const promise = axios.get<TenantsModels.Tenant[]>('')
    return from(promise).pipe(map((value) => value.data))
  }

  return of(mockArray)
}
