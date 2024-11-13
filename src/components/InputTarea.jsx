const InputTarea = ({ agregatarea, nuevatarea, setNuevatarea }) => {
  return (
    <div>
      <input
        type="text"
        value={nuevatarea}
        onChange={(e) => setNuevatarea(e.target.value)}
        placeholder="Nueva tarea"
        onKeyDown={(e) => e.key === "Enter" && agregatarea()}
        className="mt-4 border divide-slate-700 mr-5 rounded-lg h-10 pl-5"
      />
      <button onClick={agregatarea} className="bg-blue-500 px-5 py-2 rounded-lg text-white
       font-bold  shadow-lg shadow-blue-500/50">AGREGAR</button>
    </div>
  );
};

export default InputTarea;
