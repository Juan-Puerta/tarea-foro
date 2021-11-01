import * as React from "react";
import AppContext from "../../store/AppContext";
import { useHistory } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import "./AppBar.css";

export default function ButtonAppBar() {
  const history = useHistory();

  const state = React.useContext(AppContext);

  const logOut = () => {
    try {
      state.logoutUser();
      history.push("/tarea-foro");
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }} className="appBar">
      <AppBar position="static">
        <Toolbar>
          <Typography
            className="userTab"
            variant="h6"
            component="span"
            sx={{ flexGrow: 1 }}
          >
            {state.userName}
          </Typography>
          <Typography variant="h6" component="span" sx={{ flexGrow: 1 }}>
            AnonymousChan
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={logOut}
          >
            <ExitToAppIcon></ExitToAppIcon>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
