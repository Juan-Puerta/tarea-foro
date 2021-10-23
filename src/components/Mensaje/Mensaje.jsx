import React, { useContext } from "react";
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
import "./Mensaje.css";

const Mensaje = ({ titulo, usuario, fecha, textMensaje, respuestas }) => {
  const state = useContext(AppContext);

  const openModalResponder = () => {
    state.openModalResponder();
  };

  return (
    <div className="mensaje">
      <Card className="card" sx={{ maxWidth: 345 }}>
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
