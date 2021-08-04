import { connect } from 'react-redux'
import { changeValue, changeConcrete } from '../../redux/actions'

const BeamMaterial = ({ concreteType, armatureType, changeValue, changeConcrete }) => {
  const inputHandler = (event) => {
    const value = parseInt(event.target.value)
    changeValue([event.target.name], value)
  }

  const inputConcreteHandler = (event) => {
    changeConcrete(event.target.value)
  }

  return (
    <div className='card bg-dark'>
      <div className='card-body'>
        <h5 className='card-title'>Материал балки</h5>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item form-item'>
            <div className='row justify-content-between'>
              <label htmlFor='concreteType' className='col-5 col-form-label col-form-label-sm'>
                Класс бетона:
              </label>
              <div className='col-7'>
                <select
                  id='concreteType'
                  value={concreteType.type}
                  className='form-select form-select-sm'
                  aria-label='Concrete select'
                  name='concreteType'
                  onChange={inputConcreteHandler}>
                  <option value='B10'>C8/10 или B10</option>
                  <option value='B20'>C16/20 или B20</option>
                  <option value='B25'>C20/25 или B25</option>
                </select>
              </div>
            </div>
          </li>
          <li className='list-group-item form-item'>
            <div className='row justify-content-between'>
              <label htmlFor='armatureType' className='col-5 col-form-label col-form-label-sm'>
                Класс арматуры:
              </label>
              <div className='col-7'>
                <select
                  id='armatureType'
                  value={armatureType}
                  className='form-select form-select-sm'
                  aria-label='Armature select'
                  name='armatureType'
                  onChange={inputHandler}>
                  <option value='21900000'>Гладкая S240, A240</option>
                  <option value='36200000'>Периодического профиля S400, A400</option>
                  <option value='44300000'>Периодического профиля S500, A500</option>
                </select>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    concreteType: state.beam.concreteType,
    armatureType: state.beam.armatureType,
  }
}

const mapDispatchToProps = {
  changeValue,
  changeConcrete,
}

export default connect(mapStateToProps, mapDispatchToProps)(BeamMaterial)
