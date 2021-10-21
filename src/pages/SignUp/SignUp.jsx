import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="signUp">
      <Card className="carDispo" sx={{ minWidth: 275 }}>
        <CardContent className="carConten">
          <div>Foro estudiantil</div>
          <div>Registrarse</div>
          <hr />
          <div className="formContainer">
            <div>Nombre completo</div>
            <TextField
              required
              id="filled-required"
              label="Usuario"
              variant="filled"
            />
            <div>Correo electronico</div>
            <TextField
              required
              id="filled-required"
              label="Correo"
              variant="filled"
            />
            <div>Contraseña</div>
            <TextField
              required
              id="filled-password-input"
              label="Contraseña"
              type="password"
              autoComplete="current-password"
              variant="filled"
            />
            <div className="divBotones">
              <div>
                <Button variant="contained">Ingresar</Button>
              </div>
              <div>
                <Button variant="contained">Cancelar</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUp;
