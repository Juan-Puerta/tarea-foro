import React, { useState } from "react";
//import firebase from "../config/firebase";
//import { getFirestore, doc, setDoc, deleteDoc } from "firebase/firestore";

const AppContext = React.createContext();

export const AppContextWrapper = (props) => {
  const mensajesArray = [
    {
      id: "1m",
      idUser: "1",
      titulo: "Me gusta la caca",
      fecha: "21/10/2021",
      hechoPor: "Juan Puerta",
      texto: "El que lo lea es gay",
      respuestas: [
        { idRespuesta: "1r", idMensaje: "1m", textoR: "Interesante" },
        { idRespuesta: "2r", idMensaje: "1m", textoR: "No me cuentes tu vida" },
      ],
    },
    {
      id: "2m",
      idUser: "1",
      titulo: "¿Cómo hackeo Facebook?",
      fecha: "12/6/2021",
      hechoPor: "Juan Puerta",
      texto: "Quiero hackear el facebook de mi novia",
      respuestas: [
        {
          idRespuesta: "1r2",
          idMensaje: "2m",
          textoR: "Para que quieres saber eso",
        },
        { idRespuesta: "2r2", idMensaje: "2m", textoR: "No tengo novia" },
        { idRespuesta: "3r2", idMensaje: "2m", textoR: "Estás enfermo amigo" },
      ],
    },
    {
      id: "3m",
      idUser: "2",
      titulo: "¿Cómo salir del platanal?",
      fecha: "11/02/2020",
      hechoPor: "Fabián Portilla",
      texto: "No sé como salir de este platanal que se va a quemar",
      respuestas: [
        {
          idRespuesta: "1r3",
          idMensaje: "3m",
          textoR: "Hay que luchar por el país",
        },
        {
          idRespuesta: "2r3",
          idMensaje: "3m",
          textoR: "¿Cómo pongo una respuesta?",
        },
      ],
    },
  ];

  //const firebaseDb = getFirestore(firebase);
  const [messages, setMessages] = useState(mensajesArray);
  const [modalResponder, setMoldalResponder] = React.useState(false);

  const setTaskMessageAndTitle = (id, newTitulo, newMensaje) => {
    const messagesUpdated = messages.map((message) => {
      if (message.id === id) {
        return {
          ...message,
          titulo: newTitulo,
          texto: newMensaje,
        };
        /** 
        const foroWebRef = doc(firebaseDb, "ForoWeb", id);
        setDoc(foroWebRef, { text: newMessage }, { merge: true });
        return { ...message, text: newMessage };
        */
      }
      return message;
    });
    setMessages(messagesUpdated);
  };

  const deleteMessage = (id) => {
    const newMessages = messages.filter((mensaje) => mensaje.id !== id);
    setMessages(newMessages);
  };

  const openModalResponder = () => {
    setMoldalResponder(true);
  };
  const closeModalResponder = () => setMoldalResponder(false);

  const state = {
    messages,
    setMessages,
    setTaskMessageAndTitle,
    deleteMessage,
    modalResponder,
    openModalResponder,
    closeModalResponder,
  };

  return (
    <AppContext.Provider value={state} displayName="AppContext">
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContext;
