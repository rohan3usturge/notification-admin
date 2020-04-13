import axios from 'axios'
import { from, Observable, of } from 'rxjs'
import { map } from 'rxjs/operators'
import { ChannelModels } from '../features/channels'
import { v4 } from 'uuid'

const url = 'http://localhost:7071/api/channels'
const mockArray: ChannelModels.Channel[] = []

export function add(name: string, fromMock = false) {
  if (!fromMock) {
    const promise = axios.post<ChannelModels.Channel>(url, {
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

export function fetch(fromMock = false): Observable<ChannelModels.Channel[]> {
  if (!fromMock) {
    const promise = axios.get<ChannelModels.Channel[]>(url)
    return from(promise).pipe(map((value) => value.data))
  }

  return of(mockArray)
}
