import { useEffect, useState } from "react";
import Title from "./components/Title";
import InputTarea from "./components/InputTarea";
import Select from "./components/Select";
import Result from "./components/Result";
import Tareas from "./components/Tareas";

const App = () => {
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

  return (
    <div className="w-screen h-screen bg-white-700 flex justify-center items-center flex-col">
      <div className="bg-white-300 max-h-[80vh] w-4/5  border divide-slate-700 rounded-2xl  shadow-lg shadow-black-500/50 flex flex-col items-center justify-center overflow-auto">
        <Title />
        <InputTarea
          nuevatarea={nuevatarea}
          agregatarea={agregatarea}
          setNuevatarea={setNuevatarea}
        />

        <Select filtar={filtar} setFiltar={setFiltar} />

        <Tareas
          filtarTarea={filtarTarea}
          switchTarea={switchTarea}
          eliminarTarea={eliminarTarea}
        />
        <Result tareaNumero={tareaNumero} />
      </div>
    </div>
  );
};

export default App;
