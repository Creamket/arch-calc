import { CHANGE_VALUE } from './types'

export function changeValue(key, value) {
  return {
    type: CHANGE_VALUE,
    payload: [key, value],
  }
}
