import React from "react";

const Result = ({ tareaNumero }) => {
  return (
    <div className="mt-4 text-sm text-black-600 flex w-4/5 justify-between mb-3">
      <p><strong>Total : </strong> {tareaNumero.total}</p>
      <p><strong>Activas : </strong> {tareaNumero.activa}</p>
      <p><strong> Completadas :</strong> {tareaNumero.completada}</p>
    </div>
  );
};

export default Result;
