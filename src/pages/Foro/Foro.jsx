import React, { useState } from "react";
import MensajeList from "../../components/MensajeList/MensajeList";
import Button from "@mui/material/Button";
import ModalMensaje from "../../components/ModalMensaje/ModalMensaje"

const Foro = () => {

  const [mostrarModalMensaje, setmostrarModalMensaje] = useState(false);

  const cerrarModal=()=> {
    setmostrarModalMensaje(false);
  }


  return (
    <div>
      <Button onClick={()=>setmostrarModalMensaje(true)}>
        Agregar
  
      </Button>
      <ModalMensaje visible={mostrarModalMensaje} cerrarModal={cerrarModal}></ModalMensaje>
      <MensajeList></MensajeList>
    </div>
  );
};

export default Foro;
