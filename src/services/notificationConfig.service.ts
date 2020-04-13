import axios from 'axios'
import { from, Observable, of } from 'rxjs'
import { map } from 'rxjs/operators'
import { v4 } from 'uuid'
import { NotificationConfigModels } from '../features/notificationConfig'

const url = 'http://localhost:7071/api/channels'
const mockArray: NotificationConfigModels.NotificationConfig[] = []

export function add(name: string, fromMock = false) {
  if (!fromMock) {
    const promise = axios.post<NotificationConfigModels.NotificationConfig>(
      url,
      {
        name,
      }
    )
    return from(promise).pipe(map((value) => value.data))
  }
  const returnO = {
    id: v4(),
    name,
  }
  mockArray.push(returnO)
  return of(returnO)
}

export function fetch(
  fromMock = false
): Observable<NotificationConfigModels.NotificationConfig[]> {
  if (!fromMock) {
    const promise = axios.get<NotificationConfigModels.NotificationConfig[]>(
      url
    )
    return from(promise).pipe(map((value) => value.data))
  }

  return of(mockArray)
}
