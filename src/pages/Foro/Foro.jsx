import React, { useState } from "react";
import MensajeList from "../../components/MensajeList/MensajeList";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import firebase from "../../config/firebase";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import IconButton from "@mui/material/IconButton";
import ModalMensaje from "../../components/ModalMensaje/ModalMensaje";
import AppContext from "../../store/AppContext";

const Foro = () => {
  const state = React.useContext(AppContext);

  const [mostrarModalMensaje, setmostrarModalMensaje] = useState(false);

  const cerrarModal = () => {
    setmostrarModalMensaje(false);
  };

  const uploadMessages = async () => {
    const messagesUpload = [];
    const firebaseDb = getFirestore(firebase);
    const response = await getDocs(collection(firebaseDb, "messages"));
    response.forEach((message) => {
      messagesUpload.push(message.data());
    });
    state.setMessages(messagesUpload);
  };

  React.useEffect(() => {
    uploadMessages();
  }, []);

  //useEffect(() => {
  //  uploadMessages();
  //}, []);

  return (
    <div>
      <IconButton
        color="primary"
        onClick={() => setmostrarModalMensaje(true)}
        fontSize="large"
      >
        <AddCircleIcon />
      </IconButton>
      <p />
      <ModalMensaje
        visible={mostrarModalMensaje}
        cerrarModal={cerrarModal}
      ></ModalMensaje>
      <MensajeList></MensajeList>
    </div>
  );
};

export default Foro;
