import { useEffect, useState } from "react";
import { ContextTask } from "./ContexTask";

const Proveedor = ({ children }) => {
  const [tareas, setTareas] = useState([]);
  const [nuevatarea, setNuevatarea] = useState("");
  const [filtar, setFiltar] = useState("all");
  const [tareaNumero, setTareaNumero] = useState({
    total: 0,
    activa: 0,
    completada: 0,
  });
  useEffect(() => {
    const totalTareas = tareas.length;
    const tareasCompletadas = tareas.filter((tarea) => tarea.completada).length;
    const tareasActivas = totalTareas - tareasCompletadas;

    setTareaNumero({
      total: totalTareas,
      activa: tareasActivas,
      completada: tareasCompletadas,
    });
  }, [tareas]);

  console.log(tareaNumero, "tareanumero");

  //funcion para añadir una nueva tarea
  const agregatarea = () => {
    if (nuevatarea.trim() !== "") {
      setTareas((prevTareas) => [
        ...prevTareas,
        {
          id: Date.now(),
          texto: nuevatarea,
          completada: false,
        },
      ]);
      setNuevatarea("");
    }
  };

  //funcion para cambiar de estado una tarea
  const switchTarea = (id) => {
    setTareas((prevTareas) =>
      prevTareas.map((tarea) =>
        tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
      )
    );
  };

  //fucnion para eliminar tarea
  const eliminarTarea = (id) => {
    setTareas((prevTareas) => prevTareas.filter((tarea) => tarea.id !== id));
  };

  const filtarTarea = tareas.filter((tarea) => {
    if (filtar === "activa") return !tarea.completada;
    if (filtar === "completada") return tarea.completada;
    return true;
  });
  return <ContextTask.Provider value={{tareas,nuevatarea, filtar, tareaNumero, agregatarea, switchTarea, eliminarTarea,setNuevatarea,setFiltar, filtarTarea}}>
    {children}
  </ContextTask.Provider>;
};

export default Proveedor;
