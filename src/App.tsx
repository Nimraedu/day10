import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InteractiveComponent from './components/InteractiveComponent'
import MaterComponent from './components/MasterComponents'
import MasterComponent from './components/MasterComponents'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <InteractiveComponent /> */}
      {/* <MasterComponents /> */}
    <MasterComponent />
    </>
  )
}

export default App
