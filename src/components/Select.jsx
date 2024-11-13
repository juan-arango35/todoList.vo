import React from 'react'

const Select = ({filtar, setFiltar}) => {
  return (
    <div>
        <select value={filtar} onChange={(e) => setFiltar(e.target.value)}>
        <option value="all">Todas</option>
        <option value="activa">Activas</option>
        <option value="completada">Completadas</option>
      </select>
    </div>
  )
}

export default Select