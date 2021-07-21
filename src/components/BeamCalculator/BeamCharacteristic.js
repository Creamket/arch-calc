import { connect } from 'react-redux'
import { changeValue } from '../../redux/actions'

const BeamCharacteristic = ({ loadQInput, widthBInput, heightHInput, lengthLInput, scheme, changeValue }) => {
  const inputHandler = (event) => {
    const value = parseFloat(event.target.value)
    changeValue([event.target.name], value)
  }

  return (
    <div className='col-12 col-sm-6 col-lg-4'>
      <div className='card bg-dark'>
        <div className='card-body'>
          <h5 className='card-title'>Характеристика балки</h5>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item form-item'>
              <div className='row justify-content-between'>
                <label htmlFor='scheme' className='col-5 col-form-label col-form-label-sm'>
                  Схема:
                </label>
                <div className='col-7'>
                  <select
                    id='scheme'
                    value={scheme}
                    className='form-select form-select-sm'
                    aria-label='Scheme select'
                    name='scheme'
                    onChange={inputHandler}>
                    <option value='1'>Шарнир-Шарнир</option>
                    <option value='2'>Свободный конец</option>
                  </select>
                </div>
              </div>
            </li>
            <li className='list-group-item form-item'>
              <div className='row justify-content-between'>
                <label htmlFor='loadQInput' className='col-5 col-form-label col-form-label-sm'>
                  Нагрузка на балку q
                </label>
                <div className='col-7'>
                  <div className='input-group input-group-sm'>
                    <input
                      type='number'
                      min='0'
                      className='form-control'
                      id='loadQInput'
                      placeholder='Введите значение'
                      value={loadQInput}
                      name='loadQ'
                      onChange={inputHandler}
                    />
                    <span className='input-group-text'>кг/м</span>
                  </div>
                </div>
              </div>
            </li>
            <li className='list-group-item form-item'>
              <div className='row justify-content-between'>
                <label htmlFor='widthBInput' className='col-5 col-form-label col-form-label-sm'>
                  Ширина сечения b
                </label>
                <div className='col-7'>
                  <div className='input-group input-group-sm'>
                    <input
                      type='number'
                      min='0'
                      step='0.01'
                      className='form-control'
                      id='widthBInput'
                      placeholder='Введите значение'
                      value={widthBInput}
                      name='widthB'
                      onChange={inputHandler}
                    />
                    <span className='input-group-text'>м</span>
                  </div>
                </div>
              </div>
            </li>
            <li className='list-group-item form-item'>
              <div className='row justify-content-between'>
                <label htmlFor='heightHInput' className='col-5 col-form-label col-form-label-sm'>
                  Высота сечения h
                </label>
                <div className='col-7'>
                  <div className='input-group input-group-sm'>
                    <input
                      type='number'
                      min='0'
                      step='0.01'
                      className='form-control'
                      id='heightHInput'
                      placeholder='Введите значение'
                      value={heightHInput}
                      name='heightH'
                      onChange={inputHandler}
                    />
                    <span className='input-group-text'>м</span>
                  </div>
                </div>
              </div>
            </li>
            <li className='list-group-item form-item'>
              <div className='row justify-content-between'>
                <label htmlFor='lengthLInput' className='col-5 col-form-label col-form-label-sm'>
                  Длина балки L
                </label>
                <div className='col-7'>
                  <div className='input-group input-group-sm'>
                    <input
                      type='number'
                      min='0'
                      step='0.01'
                      className='form-control'
                      id='lengthLInput'
                      placeholder='Введите значение'
                      value={lengthLInput}
                      name='lengthL'
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
    scheme: state.beam.scheme,
    loadQInput: state.beam.loadQ,
    widthBInput: state.beam.widthB,
    heightHInput: state.beam.heightH,
    lengthLInput: state.beam.lengthL,
  }
}

const mapDispatchToProps = {
  changeValue,
}

export default connect(mapStateToProps, mapDispatchToProps)(BeamCharacteristic)
