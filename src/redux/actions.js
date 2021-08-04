import { CALC_RESULT, CHANGE_CONCRETE, CHANGE_VALUE } from './types'

export function changeValue(key, value) {
  return {
    type: CHANGE_VALUE,
    payload: [key, value],
  }
}

export function calcResult(area, diameter, weight, cross, scheme, height, length) {
  return {
    type: CALC_RESULT,
    payload: [area, diameter, weight, cross, scheme, height, length],
  }
}

export function changeConcrete(name) {
  switch (name) {
    case 'B10':
      name = [name, 610000, 57000]
      break
    case 'B20':
      name = [name, 1170000, 90000]
      break
    case 'B25':
      name = [name, 1480000, 105000]
      break
    default:
      break
  }
  return {
    type: CHANGE_CONCRETE,
    payload: name,
  }
}
