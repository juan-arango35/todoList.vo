import React, { useContext } from 'react'
import { ContextTask } from '../context/ContexTask'

const Select = ({children}) => {
  const {filtar, setFiltar}=useContext(ContextTask)
  return (
    <div className='mt-5'>
      <div>{children}</div>
        <select value={filtar} onChange={(e) => setFiltar(e.target.value)} className='w-[410px] rounded-lg h-10 pl-5 border divide-slate-700 bg-white'>
        <option value="all">Todas</option>
        <option value="activa">Activas</option>
        <option value="completada">Completadas</option>
      </select>
    </div>
  )
}

export default Select