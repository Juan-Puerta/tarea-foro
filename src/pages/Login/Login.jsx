import React from "react";
import { useHistory } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import AppContext from "../../store/AppContext";
import md5 from 'md5'

import "./Login.css";

const Login = () => {
  const history = useHistory();

  const state = React.useContext(AppContext);

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      state.loginUser(email, md5(password));
      history.push("/home");
    } catch (error) {
      console.log("error: " + error);
    }
  };

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
            <div>Email</div>
            <TextField
              id="filled-required"
              label="Email"
              variant="filled"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            <div>Contraseña</div>
            <TextField
              id="filled-password-input"
              label="Contraseña"
              type="password"
              autoComplete="current-password"
              variant="filled"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
            <div>
              <Button variant="contained" onClick={handleSubmit}>
                Ingresar
              </Button>
            </div>
          </div>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            onClick={() => {
              history.push("/signUp");
            }}
          >
            Registrarse
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Login;
