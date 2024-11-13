

const Tareas = ({filtarTarea, switchTarea, eliminarTarea}) => {
  return (
    <div className="flex-grow w-full overflow-y-auto flex justify-center">

    <ul className="mt-5">
        {filtarTarea.map((item) => (
          <li key={item.id}
          className="w-[400px] py-2 pl-3 border mb-2  divide-slate-700  rounded-lg flex justify-between"
          >

            <input
              type="checkbox"
              checked={item.completada}
              onChange={() => switchTarea(item.id)}
              id={`tarea-${item.id}`}
              className="mr-3"
            />
            <label
              htmlFor={`tarea-${item.id}`}
              className={`${
                item.completada ? "line-through text-gray-500" : ""
              } font-bold`}
            >
              {item.texto}
            </label>
            <button onClick={() => eliminarTarea(item.id)} className="mr-4 bg-red-600 py-1 px-3 rounded-lg text-white font-bold">Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Tareas