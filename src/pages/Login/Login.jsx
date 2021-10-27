import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <Card className="carDispo" sx={{ minWidth: 275 }}>
        <CardContent className="carConten">
          <div className="cabeseraLogin">
            <div>Foro estudiantil</div>
            <div>Login</div>
          </div>
          <hr />
          <div className="formContainer">
            <div>Nombre de usuario</div>
            <TextField 
            id="filled-required" 
            label="Usuario" 
            variant="filled" 
            />
            <div>Contraseña</div>
            <TextField
              id="filled-password-input"
              label="Contraseña"
              type="password"
              autoComplete="current-password"
              variant="filled"
            />
            <div>
              <Button variant="contained">Ingresar</Button>
            </div>
          </div>
        </CardContent>
        <CardActions>
          <Button size="small">Registrarse</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Login;
