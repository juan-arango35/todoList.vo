import React from 'react'
import { useState } from 'react'

const App = () => {

  const [tareas, setTareas] = useState([])
  const [nuevatarea, setNuevatarea] = useState('')
  const [filtar, setFiltar] = useState('all');
  const [tareaNumero, setTareaNumero] = useState({
    total: 0,activa: 0,completada: 0
  })


  
  return (
    <div>

    </div>
  )
}

export default App