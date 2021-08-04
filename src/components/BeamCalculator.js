import { connect } from 'react-redux'
import BeamCharacteristic from './BeamCalculator/BeamCharacteristic'
import BeamMaterial from './BeamCalculator/BeamMaterial'
import BeamResult from './BeamCalculator/BeamResult'
import ProtectiveLayer from './BeamCalculator/ProtectiveLayer'
import Reinforcement from './BeamCalculator/Reinforcement'

const BeamCalculator = ({ isExtra }) => {
  return (
    <form>
      <div className='row g-0'>
        <div className='col-12 col-md-4'>
          <BeamMaterial />
          <ProtectiveLayer title='c' name='protectiveLayerC' />
        </div>
        <div className='col-12 col-md-4 align-self-end order-last order-md-1'>
          <BeamCharacteristic />
          <BeamResult />
        </div>
        <div className='col-12 col-md-4 order-2'>
          <Reinforcement />
          {isExtra === true && <ProtectiveLayer title='c1' name='protectiveLayerC1' />}
        </div>
      </div>
    </form>
  )
}

const mapStateToProps = (state) => {
  return {
    isExtra: state.beam.isExtraArm,
  }
}

export default connect(mapStateToProps)(BeamCalculator)
