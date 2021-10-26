import React, { useContext, useState } from "react";
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
          id={message.id}
          titulo={message.titulo}
          usuario={message.hechoPor}
          fecha={message.fecha}
          textMensaje={message.texto}
          respuestas={message.respuestas}
        />
      ))}
    </div>
    
  );
};

export default MensajeList;
