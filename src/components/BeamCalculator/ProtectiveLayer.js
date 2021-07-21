import { connect } from 'react-redux'
import { changeValue } from '../../redux/actions'

const ProtectiveLayer = ({ title, name, changeValue, protectiveLayerC, protectiveLayerC1 }) => {
  const inputHandler = (event) => {
    changeValue([event.target.name], event.target.value)
  }

  return (
    <div className='col-12 col-sm-6 col-lg-4'>
      <div className='card bg-dark'>
        <div className='card-body'>
          <h5 className='card-title'>Величина защитного слоя "{title}"</h5>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item form-item'>
              <div className='row justify-content-between'>
                <label htmlFor={name} className='col-5 col-form-label col-form-label-sm'>
                  Защитный слой
                </label>
                <div className='col-7'>
                  <div className='input-group input-group-sm'>
                    <input
                      type='number'
                      className='form-control'
                      id={name}
                      min='0'
                      step='0.01'
                      placeholder='кг/м'
                      value={name === 'protectiveLayerC' ? protectiveLayerC : protectiveLayerC1}
                      name={name}
                      onChange={inputHandler}
                    />
                    <span className='input-group-text'>м</span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    protectiveLayerC: state.beam.protectiveLayerC,
    protectiveLayerC1: state.beam.protectiveLayerC1,
  }
}

const mapDispatchToProps = {
  changeValue,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProtectiveLayer)
