import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  setDoc,
  deleteDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";
import firebase from "../config/firebase";

const AppContext = React.createContext();

export const AppContextWrapper = (props) => {
  const firebaseDb = getFirestore(firebase);

  const [messages, setMessages] = useState([]);

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const uploadMessages = async () => {
    const messagesUpload = [];
    //const firebaseDb = getFirestore(firebase);
    const response = await getDocs(collection(firebaseDb, "messages"));
    response.forEach((message) => {
      messagesUpload.push(message.data());
    });
    setMessages(messagesUpload);
  };

  React.useEffect(() => {
    uploadMessages();
  }, []);

  //Está completo
  const setTaskMessageAndTitle = (id, newTitulo, newMensaje) => {
    const messagesUpdated = messages.map((message) => {
      if (message.id === id) {
        return {
          ...message,
          titulo: newTitulo,
          texto: newMensaje,
        };
      }
      return message;
    });
    setMessages(messagesUpdated);
    try {
      const messageRef = doc(firebaseDb, "messages", id);
      setDoc(
        messageRef,
        { texto: newMensaje, titulo: newTitulo },
        { merge: true }
      );
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  //Está completo
  const deleteMessage = async (id) => {
    const newMessages = messages.filter((mensaje) => mensaje.id !== id);
    setMessages(newMessages);
    await deleteDoc(doc(firebaseDb, "messages", id));
    const userRef = doc(firebaseDb, "users", userEmail);
    setDoc(userRef, { messages: arrayRemove(id) }, { merge: true });
  };

  //Está completo
  const addAnswer = (id, textoRespuesta) => {
    const nuevaRespuesta = {
      idRespuesta: uuidv4(),
      idMensaje: id,
      textoR: textoRespuesta,
    };
    const updateAnswer = messages.map((mensaje) => {
      if (mensaje.id === id) {
        mensaje.respuestas.push(nuevaRespuesta);
      }
      return mensaje;
    });

    setMessages(updateAnswer);
    const messageRef = doc(firebaseDb, "messages", id);
    setDoc(
      messageRef,
      { respuestas: arrayUnion(textoRespuesta) },
      { merge: true }
    );
  };

  //Está completo
  const addMessage = (elTitulo, mensaje) => {
    let date_ob = new Date();
    let date = ("0" + date_ob.getDate()).slice(-2);
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let year = date_ob.getFullYear();
    let hours = date_ob.getHours();
    let minutes = date_ob.getMinutes();

    const newMensaje = {
      id: uuidv4(),
      idUser: userEmail,
      titulo: elTitulo,
      fecha: date + "/" + month + "/" + year + " " + hours + ":" + minutes,
      hechoPor: userName,
      texto: mensaje,
      respuestas: [],
    };
    const messageUpdated = [...messages, newMensaje];
    setMessages(messageUpdated);
    try {
      setDoc(doc(firebaseDb, "messages", newMensaje.id), newMensaje);

      const userRef = doc(firebaseDb, "users", userEmail);
      setDoc(userRef, { messages: arrayUnion(newMensaje.id) }, { merge: true });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  //Está completo
  const addUser = () => {
    const newUser = {
      userName: userName,
      userEmail: userEmail,
      userPassword: userPassword,
      messages: [],
    };
    try {
      setDoc(doc(firebaseDb, "users", newUser.userEmail), newUser);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  //Está completo
  const logOutAppUser = () => {
    setUserName("");
    setUserEmail("");
    setUserPassword("");
  };

  const state = {
    messages,
    setMessages,
    addMessage,
    setTaskMessageAndTitle,
    deleteMessage,
    addAnswer,
    userName,
    setUserName,
    userEmail,
    setUserEmail,
    userPassword,
    setUserPassword,
    addUser,
    logOutAppUser,
  };

  return (
    <AppContext.Provider value={state} displayName="AppContext">
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContext;
