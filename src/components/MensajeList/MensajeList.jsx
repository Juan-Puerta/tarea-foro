import React, { useContext } from "react";
import AppContext from "../../store/AppContext";
import Mensaje from "../Mensaje/Mensaje";
import "./MensajeList.css";

const MensajeList = () => {
  const state = useContext(AppContext);

  return (
    <div className="mensajeList">
      {state.mensajes.map((mensaje) => (
        <Mensaje
          key={mensaje.id}
          titulo={mensaje.titulo}
          usuario={mensaje.hechoPor}
          fecha={mensaje.fecha}
          textMensaje={mensaje.texto}
        />
      ))}
    </div>
  );
};

export default MensajeList;
