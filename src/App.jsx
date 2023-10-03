import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import { Foods } from './pages/Foods'
import { CreateFood } from './pages/Create/index'
import { EditeFood } from './pages/Edite'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Foods></Foods>} />
        <Route path='/create' element={<CreateFood></CreateFood>} />
        <Route path='/edite/:id' element={<EditeFood></EditeFood>} />
        {/* <Route path='/edite/:id' element={<EditeFood></EditeFood>} /> */}

      </Routes>
    </BrowserRouter>
  )
}

export default App
