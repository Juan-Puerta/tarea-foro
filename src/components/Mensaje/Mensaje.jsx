import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import { CardActionArea } from "@mui/material";
import "./Mensaje.css";

const Mensaje = ({ titulo, usuario, fecha, textMensaje }) => {
  return (
    <div className="mensaje">
      <Card className="card" sx={{ maxWidth: 345 }}>
        <CardActionArea className="cardAction">
          <CardContent className="cardContent">
            <div className="infoMensaje">
              <Typography gutterBottom variant="h5" component="div">
                {titulo}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                {usuario}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                {fecha}
              </Typography>
            </div>
            <Typography variant="body2" color="text.secondary">
              {textMensaje}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small">Editar</Button>
          <Button size="small">Eliminar</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Mensaje;
