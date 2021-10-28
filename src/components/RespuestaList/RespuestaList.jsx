import React from "react";
import { v4 as uuidv4 } from "uuid";
import Respuesta from "../Respuesta/Respuesta";

const RespuestaList = ({ respuestas }) => {
  return (
    <div>
      {respuestas.map((resp) => (
        <Respuesta key={uuidv4()} textoR={resp} />
      ))}
    </div>
  );
};

export default RespuestaList;
