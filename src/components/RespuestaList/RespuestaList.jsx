import React from "react";
import Respuesta from "../Respuesta/Respuesta";

const RespuestaList = ({ respuestas }) => {
  return (
    <div>
      {respuestas.map((resp) => (
        <Respuesta key={resp.idRespuesta} textoR={resp.textoR} />
      ))}
    </div>
  );
};

export default RespuestaList;
