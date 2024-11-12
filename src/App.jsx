import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [tareas, setTareas] = useState([]);
  const [nuevatarea, setNuevatarea] = useState("");
  const [filtar, setFiltar] = useState("all");
  const [tareaNumero, setTareaNumero] = useState({
    total: 0,
    activa: 0,
    completada: 0,
  });

  //efecto para actulaizar elconteo de las tareas cuando la alista de taeras cambia.
  useEffect(() => {
    const totalTareas = tareas.length;
    const tareasCompletadas = tareas.filter((tarea) => tarea.completada).length;

    setTareaNumero({
      total: totalTareas,
      activa: totalTareas - tareasCompletadas,
      completada: tareasCompletadas,
    });
  }, [tareas]);

  //funcion para añadir una nueva tarea
  const agregatarea = (e) => {
    const nuevaTarea = {
      id: Date.now(),
      texto: nuevatarea,
      completada: false,
    };
    if (nuevatarea.trim().length > 0) {
      setTareas([...tareas, nuevaTarea]);
      setNuevatarea("");
    }
  };

  //funcion para cambiar de estado una tarea
  const switchTarea = (id) => {
    setTareas(
      tareas.map((tarea) =>
        tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
      )
    );
  };

  //fucnion para eliminar tarea
  const eliminarTarea = (id) => {
    setTareas(tareas.filter((tarea) => tarea.id !== id));
  };

  const filtarTarea = tareas.filter((tarea) => {
    if (filtar === "activa") return !tarea.completada;
    if (filtar === "completada") return tarea.completada;
    return true;
  });

  
  return (
    <div className="w-full max-w-2xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-center">Lista de tareas</h1>
      </div>
      <div className="flex space-x-2 mb-4">
        <input
          type="text"
          onChange={(e) => setNuevatarea(e.target.value)}
          placeholder="Nueva tarea"
          onKeyDown={(e) => e.key === "Enter" && agregatarea()}
        />
        <button onClick={agregatarea}>Añadir</button>
      </div>
      <select value={filtar} onChange={(e) => setFiltar(e.target.value)}>
        <option value="all">Todas</option>
        <option value="activa">Activas</option>
        <option value="completada">Completadas</option>
      </select>

    <ul>
      {
        filtarTarea.map((item)=>(
          <li key={item.id}>
            <input type="checkbox" checked={item.completada}
            onChange={()=>switchTarea(item.id)}
            id={`tarea - ${item.id}`}
            />
            <label htmlFor={`tarea - ${item.id}`}
            className={`${item.completada ? "line-through text-gray-500" : ""}`}
            >{item.texto}</label>
            <button onClick={()=>eliminarTarea(item.id)}>Eliminar</button>
          </li>
        ))
      }
    </ul>
    <div className="mt-4 text-sm text-gray-600">
          <p>Total: {tareaNumero.total}</p>
          <p>Activas: {tareaNumero.activa}</p>
          <p>Completadas: {tareaNumero.completada}</p>
        </div>
    </div>
  );
};

export default App;
