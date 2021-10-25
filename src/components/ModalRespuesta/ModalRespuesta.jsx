import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import AppContext from "../../store/AppContext";
import "./ModalRespuesta.css";

const ModalRespuesta = ({ id, visible, cerrarModal }) => {
  const state = React.useContext(AppContext);

  const [textRespuesta, setTextRespuesta] = React.useState("");

  const handleClose = () => {
    cerrarModal();
  };

  const enviarRespuesta = () => {
    cerrarModal();
    state.addAnswer(id, textRespuesta);
  };

  return (
    <div>
      <Dialog open={visible} onClose={handleClose}>
        <DialogTitle>Responder</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Escriba su respuesta hacia el comentario seleccionado &nbsp;
          </DialogContentText>
          <p />
          <TextField
            id="standard-multiline-static"
            label="Escribir..."
            multiline
            rows={4}
            variant="standard"
            fullWidth
            value={textRespuesta}
            onChange={(event) => setTextRespuesta(event.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={enviarRespuesta}>Enviar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ModalRespuesta;
