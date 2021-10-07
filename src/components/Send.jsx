import React, { useState } from "react";
import firebase from "../firebase";
import { TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  input: {
    width: "80%",
  },
  btnSend: {
    margin: "5px",
    backgroundColor: "red",
  },
});
function Send({ dummyRef }) {
  const [msg, setMsg] = useState("");
  const classes = useStyles();

  const handleChange = (e) => {
    setMsg(e.target.value);
  };
  const sendMessage = async (e) => {
    e.preventDefault();
    const { photoURL, uid, displayName, email, phoneNumber } =
      firebase.auth().currentUser;
    await firebase.firestore().collection("messages").add({
      text: msg,
      name: displayName,
      uid: uid,
      profilePhoto: photoURL,
      email: email,
      phoneNumber: phoneNumber,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setMsg("");
    dummyRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <form autocomplete="off">
        <TextField
          className={classes.input}
          value={msg}
          onChange={handleChange}
          id="standard-basic"
          variant="outlined"
          placeholder="send a message"
        />
        <Button className={classes.btnSend} onClick={sendMessage}>
          Send
        </Button>
      </form>
    </div>
  );
}

export default Send;
