import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  collection,
  getFirestore,
  doc,
  getDoc,
  getDocs,
  setDoc,
  deleteDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";
import firebase from "../config/firebase";
import { auth } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";

const AppContext = React.createContext();

export const AppContextWrapper = (props) => {
  const firebaseDb = getFirestore(firebase);

  const [messages, setMessages] = useState([]);

  const [user, setUser] = useState({});
  const [userName, setUserName] = useState("");

  const uploadMessages = async () => {
    const messagesUpload = [];
    const response = await getDocs(collection(firebaseDb, "messages"));
    response.forEach((message) => {
      messagesUpload.push(message.data());
    });
    setMessages(messagesUpload);
  };

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

  const deleteMessage = async (id) => {
    const newMessages = messages.filter((mensaje) => mensaje.id !== id);
    setMessages(newMessages);
    await deleteDoc(doc(firebaseDb, "messages", id));
    const userRef = doc(firebaseDb, "users", user.email);
    setDoc(userRef, { messages: arrayRemove(id) }, { merge: true });
  };

  const addAnswer = (id, textoRespuesta) => {
    const updateAnswer = messages.map((mensaje) => {
      if (mensaje.id === id) {
        mensaje.respuestas.push(textoRespuesta);
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

  const addMessage = (elTitulo, mensaje) => {
    let date_ob = new Date();
    let date = ("0" + date_ob.getDate()).slice(-2);
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let year = date_ob.getFullYear();
    let hours = date_ob.getHours();
    let minutes = date_ob.getMinutes();

    const newMensaje = {
      id: uuidv4(),
      idUser: user.email,
      titulo: elTitulo,
      fecha: date + "/" + month + "/" + year + " " + hours + ":" + minutes,
      hechoPor: user.email,
      texto: mensaje,
      respuestas: [],
    };
    const messageUpdated = [...messages, newMensaje];
    setMessages(messageUpdated);
    try {
      setDoc(doc(firebaseDb, "messages", newMensaje.id), newMensaje);
      const userRef = doc(firebaseDb, "users", user.email);
      setDoc(userRef, { messages: arrayUnion(newMensaje.id) }, { merge: true });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const registerUser = async (name, email, password) => {
    setUserName(name);
    const newUser = {
      name: name,
      email: email,
      password: password,
      messages: [],
    };
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setDoc(doc(firebaseDb, "users", newUser.email), newUser);
    } catch (error) {
      console.log(error.message);
    }
  };
  const loginUser = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      const docRef = doc(firebaseDb, "users", email);
      const docSnap = await getDoc(docRef);
      const theName = docSnap.data().name;
      setUserName(theName);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logoutUser = async () => {
    setUserName("");
    await signOut(auth);
  };

  React.useEffect(() => {
    onAuthStateChanged(auth, (usuario) => {
      setUser(usuario);
    });
    uploadMessages();
  }, []);

  const state = {
    messages,
    setMessages,
    addMessage,
    setTaskMessageAndTitle,
    deleteMessage,
    addAnswer,
    userName,
    user,
    registerUser,
    loginUser,
    logoutUser,
  };

  return (
    <AppContext.Provider value={state} displayName="AppContext">
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContext;
