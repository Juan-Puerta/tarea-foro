import React, { useContext, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import { CardActionArea } from "@mui/material";
import AppContext from "../../store/AppContext";
import AcordeonRespuestas from "../AcordeonRespuestas/AcordeonRespuestas";
import ModalRespuesta from "../ModalRespuesta/ModalRespuesta";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import "./Mensaje.css";

const Mensaje = ({ id, titulo, usuario, fecha, textMensaje, respuestas }) => {
  const state = useContext(AppContext);

  const [isUpdating, setIsUpdating] = useState(false);
  const [title, setTitle] = useState(titulo);
  const [textoMensa, setTextoMensa] = useState(textMensaje);
  const [openModalRespuesta, setOpenModalRespuesta] = React.useState(false);

  const cambiarTituloAndTexto = () => {
    setIsUpdating(false);
    state.setTaskMessageAndTitle(id, title, textoMensa);
  };

  const abrirModalRespuestas = () => {
    setOpenModalRespuesta(true);
  };

  const cerrarModalRespuesta = () => {
    setOpenModalRespuesta(false);
  };

  return (
    <div className="mensaje">
      <Card className="card" sx={{ maxWidth: 345 }}>
        <CardActions className="botonesContenedor">
          <Button variant="contained" onClick={abrirModalRespuestas}>
            Responder
          </Button>
          {usuario === state.user?.email ? (
            <div>
              {isUpdating ? (
                <IconButton
                  color="primary"
                  onClick={() => {
                    setIsUpdating(cambiarTituloAndTexto);
                  }}
                >
                  <SaveIcon />
                </IconButton>
              ) : (
                <IconButton
                  color="primary"
                  onClick={() => {
                    setIsUpdating(true);
                  }}
                >
                  <EditIcon />
                </IconButton>
              )}
              <IconButton
                color="primary"
                onClick={() => state.deleteMessage(id)}
              >
                <DeleteForeverIcon />
              </IconButton>
            </div>
          ) : (
            <div />
          )}
        </CardActions>
        {isUpdating ? (
          <CardContent className="cardContent">
            <div className="infoMensaje">
              <div className="infoMensajeUser">
                <Stack
                  direction="row"
                  divider={<Divider orientation="vertical" flexItem />}
                  spacing={2}
                >
                  <Typography gutterBottom variant="h5" component="span">
                    {usuario}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="span">
                    {fecha}
                  </Typography>
                </Stack>
              </div>
              <hr />
              <TextField
                id="standard-basic"
                label="Titulo"
                variant="filled"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              />
            </div>
            <TextField
              id="standard-multiline-static"
              label="Mensaje"
              multiline
              rows={4}
              variant="filled"
              value={textoMensa}
              onChange={(event) => setTextoMensa(event.target.value)}
            />
          </CardContent>
        ) : (
          <CardActionArea className="cardAction">
            <CardContent className="cardContent">
              <div className="infoMensaje">
                <div className="infoMensajeUser">
                  <Stack
                    direction="row"
                    divider={<Divider orientation="vertical" flexItem />}
                    spacing={2}
                  >
                    <Typography gutterBottom variant="h5" component="span">
                      {usuario}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="span">
                      {fecha}
                    </Typography>
                  </Stack>
                </div>
                <Typography gutterBottom variant="h5" component="span">
                  {title}
                </Typography>
              </div>
              <Typography
                variant="body2"
                color="text.secondary"
                component="span"
              >
                {textoMensa}
              </Typography>
            </CardContent>
          </CardActionArea>
        )}
        <AcordeonRespuestas respuestas={respuestas}></AcordeonRespuestas>
      </Card>
      <hr />
      <ModalRespuesta
        id={id}
        visible={openModalRespuesta}
        cerrarModal={cerrarModalRespuesta}
      />
    </div>
  );
};

export default Mensaje;
