import React from "react";
import md5 from "md5";
import Alerta from "../../components/Alerta/Alerta";
import { useHistory } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import AppContext from "../../store/AppContext";
import "./Login.css";

const Login = () => {
  const history = useHistory();

  const state = React.useContext(AppContext);

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(false);

  const handleSubmit = async () => {
    try {
      const passwordEncrypt = md5(password);
      await signInWithEmailAndPassword(auth, email, passwordEncrypt);
      state.loginUser(email, passwordEncrypt);
      history.push("/tarea-foro/home");
    } catch (e) {
      setError(true);
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
            <p />
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
            <p />
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
              history.push("/tarea-foro/signUp");
            }}
          >
            Registrarse
          </Button>
        </CardActions>
        {error && <Alerta tipo="error" mensaje="Credenciales Incorrectas" />}
      </Card>
    </div>
  );
};

export default Login;
