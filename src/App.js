import './App.css'
import BeamCalculator from './components/BeamCalculator'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <div className='container-md pt-3'>
          <BeamCalculator />
        </div>
      </main>
    </>
  )
}

export default App
