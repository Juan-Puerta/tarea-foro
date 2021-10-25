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
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
/* import SaveIcon from "@mui/material/SaveIcon";
import DeleteIcon from "@mui/material/DeleteIcon";
import CreateIcon from "@mui/material/CreateIcon"; */
import "./Mensaje.css";

const Mensaje = ({ titulo, usuario, fecha, textMensaje, respuestas }) => {
  const state = useContext(AppContext);

  //Creo los estados para cada componente
  const [isUpdating, setIsUpdating] = useState(false);
  const [text, setText] = useState(textMensaje);

  const cambiarStatus = (event) => {
    const status = event.target.checked;
    state.setMessageStatus(textMensaje.id, status);
  };

  const cambiarMensaje = () => {
    //setIsUpdating(false);
    state.setMessageText(textMensaje.id, text);
  };

  const openModalResponder = () => {
    state.openModalResponder();
  };

  return (
    <div className="mensaje">
      <Card className="card" sx={{ maxWidth: 345 }}>

      <div className="message_input">
        
          <TextField
            className="message_input"
            label="Mensaje..."
            //value={text}
            //onChange={(event) => setText(event.target.value)}
          />
        
      </div>

        <CardActions className="botonesContenedor">
          <Button onClick={openModalResponder} variant="contained">
            Responder
          </Button>
          <Button variant="contained">Editar</Button>
          <Button variant="contained">Eliminar</Button>
        </CardActions>
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
                {titulo}
              </Typography>
            </div>
            <Typography variant="body2" color="text.secondary" component="span">
              {textMensaje}
            </Typography>
          </CardContent>
        </CardActionArea>
        <AcordeonRespuestas respuestas={respuestas}></AcordeonRespuestas>
      </Card>
      <hr />
    </div>
  );
};

export default Mensaje;
