import React from "react";
import { useHistory } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import AppContext from "../../store/AppContext";
import "./SignUp.css";

const SignUp = (props) => {
  const history = useHistory();

  const state = React.useContext(AppContext);

  const [correctEmail, setCorrectEmail] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");

  const onEmailChange = (event) => {
    let re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    setEmail(event.target.value);
    if (re.test(event.target.value)) {
      setCorrectEmail(true);
    } else {
      setCorrectEmail(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email !== "" && name !== "" && password !== "") {
      if (correctEmail === true) {
        state.registerUser(name, email, password);
        history.push("/home");
      } else {
        alert("El email no es valido");
      }
    } else {
      alert("Por favor rellene todos los campos");
    }
  };

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
              label="Nombre"
              variant="filled"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <div>Correo electronico</div>
            <TextField
              required
              label="Correo"
              variant="filled"
              value={email}
              onChange={onEmailChange}
            />
            <div>Contraseña</div>
            <TextField
              required
              id="filled-password-input"
              label="Contraseña"
              type="password"
              autoComplete="current-password"
              variant="filled"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <div className="divBotones">
              <Stack
                direction="row"
                divider={<Divider orientation="vertical" flexItem />}
                spacing={2}
              >
                <Button variant="contained" onClick={handleSubmit}>
                  Ingresar
                </Button>
                <Button
                  variant="contained"
                  onClick={() => {
                    history.push("/");
                  }}
                >
                  Cancelar
                </Button>
              </Stack>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUp;
