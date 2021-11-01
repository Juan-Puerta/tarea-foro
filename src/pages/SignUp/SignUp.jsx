import React from "react";
import md5 from "md5";
import Alerta from "../../components/Alerta/Alerta";
import { useHistory } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import AppContext from "../../store/AppContext";
import "./SignUp.css";

const SignUp = () => {
  const history = useHistory();

  const state = React.useContext(AppContext);

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const [correctEmail, setCorrectEmail] = React.useState(false);
  const [error, setError] = React.useState(false);

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

  const handleSubmit = async () => {
    try {
      if (email !== "" && name !== "" && password !== "") {
        if (correctEmail === true) {
          const passwordEncrypt = md5(password);
          await createUserWithEmailAndPassword(auth, email, passwordEncrypt);
          state.registerUser(name, email, passwordEncrypt);
          history.push("/tarea-foro/home");
        } else {
          setCorrectEmail(true);
          setError(true);
        }
      } else {
        setCorrectEmail(true);
        setError(true);
      }
    } catch (e) {
      setError(true);
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
            <p />
            <div>Correo electronico</div>
            <TextField
              required
              label="Correo"
              variant="filled"
              value={email}
              onChange={onEmailChange}
            />
            <p />
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
            <p />
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
                    history.push("/tarea-foro");
                  }}
                >
                  Cancelar
                </Button>
              </Stack>
            </div>
          </div>
        </CardContent>
        {error && (
          <Alerta
            tipo="error"
            mensaje="Correo incorrecto o contraseña invalida"
          />
        )}
      </Card>
    </div>
  );
};

export default SignUp;
