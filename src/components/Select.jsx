import React from 'react'

const Select = ({filtar, setFiltar}) => {
  return (
    <div className='mt-5'>
        <select value={filtar} onChange={(e) => setFiltar(e.target.value)} className='w-[410px] rounded-lg h-10 pl-5 border divide-slate-700 bg-white'>
        <option value="all">Todas</option>
        <option value="activa">Activas</option>
        <option value="completada">Completadas</option>
      </select>
    </div>
  )
}

export default Select