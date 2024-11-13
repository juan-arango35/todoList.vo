

const InputTarea = ({agregatarea, nuevatarea,setNuevatarea}) => {
  return (
    <div>
         <input
          type="text"
          value={nuevatarea}
          onChange={(e) => setNuevatarea(e.target.value)}
          placeholder="Nueva tarea"
          onKeyDown={(e) => e.key === "Enter" && agregatarea()}
        />
        <button onClick={agregatarea}>Añadir</button>
    </div>
  )
}

export default InputTarea