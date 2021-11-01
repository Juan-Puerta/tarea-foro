import React from "react";
import AppContext from "../../store/AppContext";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import "./EditName.css";

const EditName = () => {
  const state = React.useContext(AppContext);

  const [newName, setNewName] = React.useState(state.userName);

  const saveNewName = () => {
    state.cambiarUserName(newName);
  };

  return (
    <div className="editName">
      <Card>
        <CardHeader
          title="Cambiar nombre de usuario"
          subheader="Escriba su nuevo nombre"
        />
        <hr />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Nombre de usuario
          </Typography>
          <p />
          <TextField
            id="filled-basic"
            label="Cambiar nombre"
            variant="filled"
            value={newName}
            onChange={(event) => {
              setNewName(event.target.value);
            }}
          />
        </CardContent>
        <CardActions disableSpacing>
          <Button onClick={saveNewName}>Guardar</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default EditName;
