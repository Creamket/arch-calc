import { connect } from 'react-redux'
import { changeValue } from '../../redux/actions'

const BeamResult = ({ result, changeValue, heightH, layerC, loadQ, lengthL, Rb, widthB, Rs, armatureN, scheme }) => {
  const resultHandler = () => {
    switch (scheme) {
      case 1:
        const h0 = heightH - layerC
        const M = (loadQ * lengthL * lengthL) / 8
        const As = (0.9 * Rb * widthB * (1 - Math.sqrt(1 - 2 * (M / (Rb * widthB * h0 * h0)))) * h0) / Rs
        const newResult = (As * 10000) / armatureN
        changeValue(['result'], newResult)
        break
      default:
        changeValue(['result'], 'Лоле')
        break
    }
  }

  return (
    <div className='col-4 align-self-end'>
      <div className='card bg-dark'>
        <div className='card-body'>
          <h5 className='card-title'>Результат:</h5>
          <div className='row'>
            <div className='col-12'>{result}</div>
            <div className='col mt-2'>
              <button type='button' class='btn btn-success' onClick={resultHandler}>
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
  }
}

const mapDispatchToProps = {
  changeValue,
}

export default connect(mapStateToProps, mapDispatchToProps)(BeamResult)
