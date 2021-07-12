import { CHANGE_VALUE } from './types'

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
  result: 'Введите данные и нажмите на кнопку, чтобы увидеть результат!',
}

export const beamReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_VALUE:
      return {
        ...state,
        [action.payload[0]]: action.payload[1],
      }
    default:
      return state
  }
}
