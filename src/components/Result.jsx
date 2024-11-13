import React, { useContext } from "react";
import { ContextTask } from "../context/ContexTask";

const Result = ({children}) => {
  const { tareaNumero }=useContext(ContextTask)
  return (
    <div className="mt-4 text-sm pr-24 text-black-600 flex w-4/5 justify-between mb-4">
      <div>{children}</div>
      <p><strong>Total : </strong> {tareaNumero.total}</p>
      <p><strong>Activas : </strong> {tareaNumero.activa}</p>
      <p><strong> Completadas :</strong> {tareaNumero.completada}</p>
    </div>
  );
};

export default Result;
