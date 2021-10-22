import React, { useContext } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";
import AppContext from "../../store/AppContext";
import "./ModalResponder.css";

const ModalResponder = () => {
  //const [open, setOpen] = React.useState(false);
  const state = useContext(AppContext);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      <Modal
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        open={state.modalResponder}
        onClose={state.closeModalResponder}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={state.modalResponder}>
          <Box sx={style} className="boxModal">
            <div>Responder</div>
            <TextField
              id="filled-multiline-static"
              label="Escriba su respuesta"
              multiline
              rows={4}
              defaultValue=""
              variant="filled"
            />
            <div className="modalBotones">
              <Stack
                direction="row"
                divider={<Divider orientation="vertical" flexItem />}
                spacing={2}
              >
                <Button variant="contained">Enviar</Button>
                <Button onClick={state.closeModalResponder} variant="contained">
                  Cancelar
                </Button>
              </Stack>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default ModalResponder;
