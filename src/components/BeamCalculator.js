import { connect } from 'react-redux'
import BeamCharacteristic from './BeamCalculator/BeamCharacteristic'
import BeamMaterial from './BeamCalculator/BeamMaterial'
import BeamResult from './BeamCalculator/BeamResult'
import ProtectiveLayer from './BeamCalculator/ProtectiveLayer'
import Reinforcement from './BeamCalculator/Reinforcement'

const BeamCalculator = ({ isExtra }) => {
  return (
    <form>
      <h2 align='center'>Расчет железобетонной балки</h2>
      <div className='row'>
        <BeamMaterial />
        <BeamCharacteristic />
        <Reinforcement />
        <ProtectiveLayer title='c' name='protectiveLayerC' />
        <BeamResult />
        {isExtra === true && <ProtectiveLayer title='c1' name='protectiveLayerC1' />}
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
