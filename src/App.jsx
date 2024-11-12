import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const App = () => {

  const [tareas, setTareas] = useState([])
  const [nuevatarea, setNuevatarea] = useState('')
  const [filtar, setFiltar] = useState('all');
  const [tareaNumero, setTareaNumero] = useState({
    total: 0,activa: 0,completada: 0
  })

//efecto para actulaizar elconteo de las tareas cuando la alista de taeras cambia.
useEffect(()=>{
  const totalTareas= tareas.length;
  const tareasCompletadas=tareas.filter((tarea)=>tarea.completada).length;

  setTareaNumero({
    total: totalTareas,
    activa: totalTareas - tareasCompletadas,
    completada: tareasCompletadas
  })
  
}, [tareas])

//funcion para añadir una nueva tarea
const agregatarea=(e)=>{
  const nuevaTarea={
    id: Date.now(),
    texto: nuevatarea,
    completada: false
  }
  if(nuevatarea.trim().length>0){
    setTareas([...tareas,nuevaTarea])
    setNuevatarea("")
  }
}

//funcion para cambiar de estado una tarea
const switchTarea=(id)=>{
setTareas(tareas.map((tarea)=>(tarea.id===id ? {...tarea, completada:!tarea.completada}: tarea)))
}

//fucnion para eliminar tarea
const eliminarTarea=(id)=>{
  setTareas(tareas.filter(tarea =>tarea.id !==id))
}

const filtarTarea=tareas.filter((tarea=>{
  if(filtar==="activa") return !tarea.completada;
  if(filtar ==="completada") return tarea.completada
  return true
}))


  return (
    <div className=''>
hola

    </div>
  )
}

export default App