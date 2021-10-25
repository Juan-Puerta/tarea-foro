import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import "./SignUp.css";
//import firebase from "../../config/firebase";

const SignUp = () => {
  return (
    <div className="signUp">
      <Card className="carDispo" sx={{ minWidth: 275 }}>
        <CardContent className="carConten">
          <div className="cabeseraSignUp">
            <div>Foro estudiantil</div>
            <div>Registrarse</div>
          </div>
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
              <Stack
                direction="row"
                divider={<Divider orientation="vertical" flexItem />}
                spacing={2}
              >
                <Button variant="contained">Ingresar</Button>
                <Button variant="contained">Cancelar</Button>
              </Stack>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUp;
