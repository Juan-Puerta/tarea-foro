import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import "./SignUp.css";
//import db from "../../config/firebase"
import firebase from '../../config/firebase';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {addUser} from '../../config/firebase';
//import {auth} from '../../config/firebase';



const SignUp = (props) => {

  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  /* const  firebaseDb = getFirestore(firebase);
  const  authentication = auth(firebase) */

  const onNameChange = (event) => {setName(event.target.value)}
  const onEmailChange = (event) => {setEmail(event.target.value)}
  const onPasswordChange = (event) => {setPassword(event.target.value)}

  const handleSubmit = (event) => {
    event.preventDefault();
    addUser(email, password);
    props.history.push("/");
}

  /* const onSingUp = (e) => {
    e.preventDefault()
    console.log("signUp")
    console.log(name, email, password)

    const auth = getAuth();
    createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
    
  } */



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
              onChange={onNameChange}
            />
            <div>Correo electronico</div>
            <TextField
              required
              id="filled-required"
              label="Correo"
              variant="filled"
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
              onChange={onPasswordChange}
            />
            <div className="divBotones">
              <Stack
                direction="row"
                divider={<Divider orientation="vertical" flexItem />}
                spacing={2}
              >
                <Button variant="contained" onClick={handleSubmit}>Ingresar</Button>
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
