import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import { CardActionArea } from "@mui/material";
import "./Mensaje.css";

const Mensaje = ({ titulo, usuario, fecha, textMensaje }) => {
  return (
    <div className="mensaje">
      <Card className="card" sx={{ maxWidth: 345 }}>
        <CardActionArea className="cardAction">
          <CardContent className="cardContent">
            <div className="infoMensaje">
              <div className="infoMensajeUser">
                <Stack
                  direction="row"
                  divider={<Divider orientation="vertical" flexItem />}
                  spacing={2}
                >
                  <Typography gutterBottom variant="h5" component="div">
                    {usuario}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div">
                    {fecha}
                  </Typography>
                </Stack>
              </div>
              <Typography gutterBottom variant="h5" component="div">
                {titulo}
              </Typography>
            </div>
            <Typography variant="body2" color="text.secondary">
              {textMensaje}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className="botonesContenedor">
          <Button variant="contained">Editar</Button>
          <Button variant="contained">Eliminar</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Mensaje;
