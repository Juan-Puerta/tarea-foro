import React from "react";
import { useHistory } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import AppContext from "../../store/AppContext";
//import { v4 as uuidv4 } from "uuid";
import "./SignUp.css";
//import db from "../../config/firebase"
//import firebase from '../../config/firebase';
//import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
//import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
//import { addUser } from "../../config/firebase";
//import {auth} from '../../config/firebase';

const SignUp = (props) => {
  const history = useHistory();

  const state = React.useContext(AppContext);

  const [correctEmail, setCorrectEmail] = React.useState(false);

  const onNameChange = (event) => {
    state.setUserName(event.target.value);
  };
  const onEmailChange = (event) => {
    let re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(event.target.value)) {
      state.setUserEmail(event.target.value);
      setCorrectEmail(true);
    } else {
      state.setUserEmail(event.target.value);
      setCorrectEmail(false);
    }
  };
  const onPasswordChange = (event) => {
    state.setUserPassword(event.target.value);
  };

  const handleSubmit = () => {
    if (
      state.userEmail !== "" &&
      state.userName !== "" &&
      state.userPassword !== ""
    ) {
      if (correctEmail === true) {
        state.addUser();
        history.push("/");
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
              //id="filled-required"
              label="Usuario"
              variant="filled"
              value={state.userName}
              onChange={onNameChange}
            />
            <div>Correo electronico</div>
            <TextField
              required
              //id="filled-required"
              label="Correo"
              variant="filled"
              value={state.userEmail}
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
              value={state.userPassword}
              onChange={onPasswordChange}
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
