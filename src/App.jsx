
import Title from "./components/Title";
import InputTarea from "./components/InputTarea";
import Select from "./components/Select";
import Result from "./components/Result";
import Tareas from "./components/Tareas";
import Proveedor from "./context/Proveedor";

const App = () => {
  return (
    <Proveedor>
      <div className="w-screen h-screen bg-white-700 flex justify-center items-center flex-col">
        <div className="bg-white-300 max-h-[80vh] w-4/5  border divide-slate-700 rounded-2xl  shadow-lg shadow-black-500/50 flex flex-col items-center justify-center overflow-auto">
          <Title />
          <InputTarea />

          <Select />

          <Tareas />
          <Result />
        </div>
      </div>
    </Proveedor>
  );
};

export default App;
