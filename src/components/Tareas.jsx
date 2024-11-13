

const Tareas = ({filtarTarea, switchTarea, eliminarTarea}) => {
  return (
    <ul>
        {filtarTarea.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              checked={item.completada}
              onChange={() => switchTarea(item.id)}
              id={`tarea-${item.id}`}
            />
            <label
              htmlFor={`tarea-${item.id}`}
              className={`${
                item.completada ? "line-through text-gray-500" : ""
              }`}
            >
              {item.texto}
            </label>
            <button onClick={() => eliminarTarea(item.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
  )
}

export default Tareas