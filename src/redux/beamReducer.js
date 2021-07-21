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
    [8, 0.503, 1.01, 1.51, 2.01, 2.51, 3.02, 3.52, 4.02, 4.53, 5.03, 0.395],
    [10, 0.789, 1.57, 2.36, 3.14, 3.93, 4.71, 5.5, 6.28, 7.07, 7.85, 0.617],
    [12, 1.131, 2.26, 3.39, 4.52, 5.65, 6.79, 7.92, 9.05, 10, 18, 11.31, 0.888],
    [14, 1.539, 3.08, 4.62, 6.16, 7.69, 9.23, 10.77, 12.31, 13.85, 15.39, 1.208],
    [16, 2.011, 4.02, 6.03, 8.04, 10.05, 12.06, 14.07, 16.08, 18.1, 20.11, 1.578],
    [18, 2.545, 5.09, 7.63, 10.18, 12.72, 15.27, 17.81, 20.36, 22.9, 25.45, 1.998],
    [20, 3.142, 6.28, 9.41, 12.56, 15.71, 18.85, 21.99, 25.14, 28.28, 31.42, 2.466],
    [22, 3.801, 7.6, 11.4, 15.2, 19, 22.81, 26.61, 30.41, 34.21, 38.01, 2.984],
    [25, 4.909, 9.82, 14.79, 19.63, 24.54, 29.45, 34.36, 39.27, 44.13, 49.09, 3.853],
    [28, 6.158, 12.32, 18.47, 24.63, 30.79, 36.95, 43.1, 49.26, 55.42, 61.58, 4.834],
    [32, 8.042, 16.08, 24.13, 32.17, 40.21, 48.25, 56.3, 64.34, 72.38, 80.42, 6.313],
    [36, 10.18, 20.36, 30.54, 40.72, 50.9, 61.08, 71.26, 81.44, 91.62, 101.8, 7.99],
    [40, 12.56, 25.12, 37.68, 50.24, 62.8, 75.36, 87.92, 100.5, 113.0, 125.6, 9.805],
  ],
  result: {
    area: 'default',
    diameter: 0,
    weight: 0,
    defaultMessage: 'Введите данные и нажмите на кнопку, чтобы увидеть результат!',
    errorMessage: 'Что-то пошло не так! Пожалуйста, проверьте введеные данные.',
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