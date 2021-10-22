import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import "./AppBar.css";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }} className="appBar">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="span" sx={{ flexGrow: 1 }}>
            AnimusChan
          </Typography>

          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <ExitToAppIcon></ExitToAppIcon>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
