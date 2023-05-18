import { connect } from 'react-redux'
import { calcResult } from '../../redux/actions'
import Result from './Result'

const BeamResult = ({
  result,
  calcResult,
  heightH,
  layerC,
  loadQ,
  safetyFactor,
  lengthL,
  Rb,
  Rbt,
  widthB,
  Rs,
  armatureN,
  scheme,
  tableValues,
}) => {
  const resultHandler = () => {
    const lateralLoadQ = loadQ * safetyFactor + widthB * heightH * 2500
    const crossLoadQ = (lateralLoadQ * lengthL) / 2
    const h0 = heightH - layerC - 0.007
    const crossArm = crossLoadQ <= 0.6 * Rbt * widthB * h0
    const M = (lateralLoadQ * lengthL * lengthL) / (scheme === 1 ? 8 : 2)
    const As = (0.9 * Rb * widthB * (1 - Math.sqrt(1 - 2 * (M / (Rb * widthB * h0 * h0)))) * h0) / Rs
    const area = (As * 10000) / armatureN || 'error'
    const [diameter, , weight] = tableValues.filter((row) => area <= row[1])[0] || ['более 40', '', '—']
    calcResult(area, diameter, weight, crossArm, scheme, heightH, lengthL)
  }

  return (
    <div className='card bg-dark'>
      <div className='card-body'>
        <div className='row'>
          <div className='col-12'>
            {result.area === 'default' ? (
              result.defaultMessage
            ) : result.area === 'error' ? (
              result.errorMessage
            ) : (
              <Result result={result} />
            )}
          </div>
          <div className='col mt-2'>
            <button type='button' className='btn btn-success' onClick={resultHandler}>
              Подсчитать!
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    scheme: state.beam.scheme,
    loadQ: state.beam.loadQ,
    safetyFactor: state.beam.safetyFactor,
    widthB: state.beam.widthB,
    heightH: state.beam.heightH,
    lengthL: state.beam.lengthL,
    layerC: state.beam.protectiveLayerC,
    Rb: state.beam.concreteType.Rb,
    Rbt: state.beam.concreteType.Rbt,
    Rs: state.beam.armatureType,
    result: state.beam.result,
    armatureN: state.beam.scheme === 1 ? state.beam.armatureBelow : state.beam.armatureAbove,
    tableValues: state.beam.tableValues,
  }
}

const mapDispatchToProps = {
  calcResult,
}

export default connect(mapStateToProps, mapDispatchToProps)(BeamResult)
