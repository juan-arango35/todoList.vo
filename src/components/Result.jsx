import React from 'react'

const Result = ({tareaNumero}) => {
  return (
    <div className="mt-4 text-sm text-gray-600">
      
        <p>Total: {tareaNumero.total}</p>
        <p>Activas: {tareaNumero.activa}</p>
        <p>Completadas: {tareaNumero.completada}</p>
      </div>
  )
}

export default Result