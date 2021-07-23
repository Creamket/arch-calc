import { CALC_RESULT, CHANGE_VALUE } from './types'

const initialState = {
  scheme: 1,
  loadQ: 1400,
  widthB: 0.2,
  heightH: 0.5,
  lengthL: 6,
  concreteType: 610000,
  armatureType: 21900000,
  armatureBelow: 1,
  armatureAbove: 1,
  isExtraArm: false,
  protectiveLayerC: 0.02,
  protectiveLayerC1: 0.02,
  tableValues: [
    [8, 0.503, 0.395],
    [10, 0.789, 0.617],
    [12, 1.131, 0.888],
    [14, 1.539, 1.208],
    [16, 2.011, 1.578],
    [18, 2.545, 1.998],
    [20, 3.142, 2.466],
    [22, 3.801, 2.984],
    [25, 4.909, 3.853],
    [28, 6.158, 4.834],
    [32, 8.042, 6.313],
    [36, 10.18, 7.99],
    [40, 12.56, 9.805],
  ],
  result: {
    area: 'default',
    diameter: 0,
    weight: 0,
    defaultMessage: 'Введите данные и нажмите на кнопку, чтобы увидеть результат!',
    errorMessage: 'Увеличьте поперечное сечение либо задайте другой бетон.',
  },
}

export const beamReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_VALUE:
      return {
        ...state,
        [action.payload[0]]: action.payload[1],
      }
    case CALC_RESULT:
      return {
        ...state,
        result: { ...state.result, area: action.payload[0], diameter: action.payload[1], weight: action.payload[2] },
      }
    default:
      return state
  }
}
