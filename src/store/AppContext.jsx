import React, { useState } from "react";

const AppContext = React.createContext();

export const AppContextWrapper = (props) => {
  const mensajesArray = [
    {
      id: "1",
      titulo: "Me gusta la caca",
      fecha: "21/10/2021",
      hechoPor: "Juan Puerta",
      texto: "El que lo lea es gay",
    },
    {
      id: "2",
      titulo: "¿Cómo hackeo Facebook?",
      fecha: "12/6/2021",
      hechoPor: "Juan Puerta",
      texto: "Quiero hackear el facebook de mi novia",
    },

    {
      id: "3",
      titulo: "¿Cómo salir del platanal?",
      fecha: "11/02/2020",
      hechoPor: "Fabián Portilla",
      texto: "No sé como salir de este platanal que se va a quemar",
    },
  ];

  const [mensajes, setMensajes] = useState(mensajesArray);

  const state = { mensajes, setMensajes };

  return (
    <AppContext.Provider value={state} displayName="AppContext">
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContext;
