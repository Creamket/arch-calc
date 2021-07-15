import { CALC_RESULT, CHANGE_VALUE } from './types'

export function changeValue(key, value) {
  return {
    type: CHANGE_VALUE,
    payload: [key, value],
  }
}

export function calcResult(area, diameter, weight) {
  return {
    type: CALC_RESULT,
    payload: [area, diameter, weight],
  }
}
