import { connect } from 'react-redux'
import { changeValue } from '../../redux/actions'

const Reinforcement = ({ changeValue, isExtra, armatureAbove, armatureBelow, scheme }) => {
  const inputHandler = (event) => {
    const value =
      event.target.type === 'checkbox'
        ? event.target.checked
        : event.type === 'change'
        ? parseInt(event.target.value)
        : event.target.value
    changeValue([event.target.name], value)
  }

  return (
    <div className='col-4'>
      <div className='card bg-dark'>
        <div className='card-body'>
          <h5 className='card-title'>Армирование</h5>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item form-item'>
              <div className='row justify-content-between'>
                <label htmlFor='numberOfArmature' className='col-5 col-form-label col-form-label-sm'>
                  Кол-во арматуры {scheme === 1 ? 'снизу' : 'сверху'}:
                </label>
                <div className='col-7'>
                  <select
                    id='numberOfArmature'
                    value={scheme === 1 ? armatureBelow : armatureAbove}
                    className='form-select form-select-sm'
                    aria-label='Armature select'
                    name={scheme === 1 ? 'armatureBelow' : 'armatureAbove'}
                    onChange={inputHandler}>
                    <option value='1'>1 арматура</option>
                    <option value='2'>2 арматуры</option>
                    <option value='3'>3 арматуры</option>
                    <option value='4'>4 арматуры</option>
                    <option value='5'>5 арматур</option>
                    <option value='6'>6 арматур</option>
                    <option value='7'>7 арматур</option>
                    <option value='8'>8 арматур</option>
                    <option value='9'>9 арматур</option>
                    <option value='10'>10 арматур</option>
                  </select>
                </div>
              </div>
            </li>
            <li className='list-group-item form-item'>
              <div className='form-check'>
                <input
                  className='form-check-input'
                  onChange={inputHandler}
                  type='checkbox'
                  id='isExtra'
                  name='isExtraArm'
                  checked={isExtra}
                />
                <label className='form-check-label' htmlFor='isExtra'>
                  + арматура {scheme === 2 ? 'снизу' : 'сверху'}
                </label>
              </div>
            </li>
            {isExtra === true && (
              <li className='list-group-item form-item'>
                <div className='row justify-content-between'>
                  <label htmlFor='numberOfArmature1' className='col-5 col-form-label col-form-label-sm'>
                    Кол-во арматуры {scheme === 2 ? 'снизу' : 'сверху'}:
                  </label>
                  <div className='col-7'>
                    <select
                      id='numberOfArmature1'
                      value={scheme === 2 ? armatureBelow : armatureAbove}
                      className='form-select form-select-sm'
                      aria-label='Armature select'
                      name={scheme === 2 ? 'armatureBelow' : 'armatureAbove'}
                      onChange={inputHandler}>
                      <option value='1'>1 арматура</option>
                      <option value='2'>2 арматуры</option>
                      <option value='3'>3 арматуры</option>
                      <option value='4'>4 арматуры</option>
                      <option value='5'>5 арматур</option>
                      <option value='6'>6 арматур</option>
                      <option value='7'>7 арматур</option>
                      <option value='8'>8 арматур</option>
                      <option value='9'>9 арматур</option>
                      <option value='10'>10 арматур</option>
                    </select>
                  </div>
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isExtra: state.beam.isExtraArm,
    armatureBelow: state.beam.armatureBelow,
    armatureAbove: state.beam.armatureAbove,
    scheme: state.beam.scheme,
  }
}

const mapDispatchToProps = {
  changeValue,
}

export default connect(mapStateToProps, mapDispatchToProps)(Reinforcement)
