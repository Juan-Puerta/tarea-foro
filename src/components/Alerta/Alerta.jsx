import React from "react";
import Alert from "@mui/material/Alert";

const Alerta = ({ tipo, mensaje }) => {
  return <Alert severity={tipo}>{mensaje}</Alert>;
};

export default Alerta;
