import React, { useContext } from "react";
import AppContext from "../../store/AppContext";
import Mensaje from "../Mensaje/Mensaje";
import "./MensajeList.css";

const MensajeList = () => {
  const state = useContext(AppContext);

  return (
    <div className="mensajeList">
      {state.mensajes.map((mensaje) => (
        <div>
          <Mensaje
            key={mensaje.id}
            titulo={mensaje.titulo}
            usuario={mensaje.hechoPor}
            fecha={mensaje.fecha}
            textMensaje={mensaje.texto}
          />
          <hr />
        </div>
      ))}
    </div>
  );
};

export default MensajeList;
