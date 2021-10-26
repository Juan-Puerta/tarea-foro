import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import AppContext from "../../store/AppContext";
import "./ModalMensaje.css";

const ModalMensaje = ({ visible, cerrarModal }) => {
  const [tituloMensaje, setTituloMensaje] = useState("");
  const [mensajeTexto, setMensajeTexto] = useState("");

  const state = React.useContext(AppContext);

  const addMessage = () => {
    cerrarModal();
    state.addMessage(tituloMensaje, mensajeTexto);
    setTituloMensaje("");
    setMensajeTexto("");
  };

  const cerrarModalMensaje = () => {
    cerrarModal();
    setTituloMensaje("");
    setMensajeTexto("");
  };

  return (
    <div>
      <Dialog open={visible} onClose={cerrarModalMensaje}>
        <DialogTitle>Escribir mensaje</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Escriba el mensaje que quiere poner en el foro de AnonymousChan
          </DialogContentText>
          <p />
          <TextField
            id="standard-basic"
            label="Titulo"
            variant="standard"
            value={tituloMensaje}
            onChange={(event) => setTituloMensaje(event.target.value)}
          />
          <p />
          <TextField
            id="standard-multiline-static"
            label="Escribir..."
            multiline
            rows={4}
            variant="standard"
            fullWidth
            value={mensajeTexto}
            onChange={(event) => setMensajeTexto(event.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={cerrarModalMensaje}>Cancelar</Button>
          <Button onClick={addMessage}>Enviar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ModalMensaje;
