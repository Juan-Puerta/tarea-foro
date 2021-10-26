import React, { useState } from "react";
import MensajeList from "../../components/MensajeList/MensajeList";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import IconButton from "@mui/material/IconButton";
import ModalMensaje from "../../components/ModalMensaje/ModalMensaje";

const Foro = () => {
  const [mostrarModalMensaje, setmostrarModalMensaje] = useState(false);

  const cerrarModal = () => {
    setmostrarModalMensaje(false);
  };

  return (
    <div>
      <IconButton
        color="primary"
        onClick={() => setmostrarModalMensaje(true)}
        fontSize="large"
      >
        <AddCircleIcon />
      </IconButton>
      <p />
      <ModalMensaje
        visible={mostrarModalMensaje}
        cerrarModal={cerrarModal}
      ></ModalMensaje>
      <MensajeList></MensajeList>
    </div>
  );
};

export default Foro;
