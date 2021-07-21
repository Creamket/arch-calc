import { connect } from 'react-redux'
import { calcResult } from '../../redux/actions'

const BeamResult = ({
  result,
  calcResult,
  heightH,
  layerC,
  loadQ,
  lengthL,
  Rb,
  widthB,
  Rs,
  armatureN,
  scheme,
  tableValues,
}) => {
  const resultHandler = () => {
    switch (scheme) {
      case 1:
        const newLoadQ = loadQ + widthB * heightH * 2500
        const h0 = heightH - layerC
        const M = (newLoadQ * lengthL * lengthL) / 8
        const As = (0.9 * Rb * widthB * (1 - Math.sqrt(1 - 2 * (M / (Rb * widthB * h0 * h0)))) * h0) / Rs
        const area = (As * 10000) / armatureN || 'error'
        const selectionValues = tableValues.filter((row) => area <= row[armatureN])[0] || ['более 40', '—']
        const diameter = selectionValues[0]
        const weight = selectionValues[selectionValues.length - 1]
        calcResult(area, diameter, weight)
        break
      default:
        calcResult('default', 0, 0)
        break
    }
  }

  return (
    <div className='col-12 col-sm-6 col-lg-4 align-self-end'>
      <div className='card bg-dark'>
        <div className='card-body'>
          <h5 className='card-title'>Результат:</h5>
          <div className='row'>
            <div className='col-12'>
              {result.area === 'default' ? (
                result.defaultMessage
              ) : result.area === 'error' ? (
                result.errorMessage
              ) : (
                <>
                  Площадь поперечного сечения: {+result.area.toFixed(4)} см² <br />
                  Диаметр стержней: {result.diameter} мм <br />
                  Теоретический вес 1 метра: {result.weight} кг
                </>
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
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    scheme: state.beam.scheme,
    loadQ: state.beam.loadQ,
    widthB: state.beam.widthB,
    heightH: state.beam.heightH,
    lengthL: state.beam.lengthL,
    layerC: state.beam.protectiveLayerC,
    Rb: state.beam.concreteType,
    Rs: state.beam.armatureType,
    result: state.beam.result,
    armatureN: state.beam.armatureBelow,
    tableValues: state.beam.tableValues,
  }
}

const mapDispatchToProps = {
  calcResult,
}

export default connect(mapStateToProps, mapDispatchToProps)(BeamResult)
