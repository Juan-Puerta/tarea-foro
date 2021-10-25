import React, { useContext } from "react";
import AppContext from "../../store/AppContext";
import Mensaje from "../Mensaje/Mensaje";
import "./MensajeList.css";


const MensajeList = () => {
  const state = useContext(AppContext);


  return (
    <div className="mensajeList">
      {state.messages.map((message) => (
        <Mensaje
          key={message.id}
          message={message}
          /* key={mensaje.id}
          titulo={mensaje.titulo}
          usuario={mensaje.hechoPor}
          fecha={mensaje.fecha}
          textMensaje={mensaje.texto}
          respuestas={mensaje.respuestas} */
        />
      ))}
    </div>
  );
};

export default MensajeList;
