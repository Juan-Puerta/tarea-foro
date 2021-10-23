import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import "./Respuesta.css";

const Respuesta = ({ textoR }) => {
  return (
    <div className="divRespuesta">
      <Card className="cardRespuesta" sx={{ maxWidth: 345 }}>
        <CardContent>
          <div>{textoR}</div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Respuesta;
