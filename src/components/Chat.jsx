import React, { useState, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import firebase from "../firebase";
import Message from "./Message";
import Send from "./Send";
const useStyles = makeStyles({
  scrollBg: {
    width: "100%",

    height: "600px",
    overflow: "hidden",
    overflowY: "scroll",
  },
});
function Chat() {
  const classes = useStyles();
  const [messages, setMessages] = useState([]);
  const dummy = useRef();

  useEffect(() => {
    firebase
      .firestore()
      .collection("messages")
      .orderBy("createdAt")
      .limit(25)
      .onSnapshot((snapShot) => {
        const data = snapShot.docs.map((doc) => doc.data());
        setMessages(data);
      });
  }, []);

  return (
    <div>
      <main className={classes.scrollBg}>
        {/* <div className={classes.scrollDiv}> */}
        {messages.map((message, i) => {
          return (
            <div key={i}>
              <Message message={message} />
            </div>
          );
        })}
        {/* </div> */}
        <div ref={dummy}></div>
      </main>
      <Send dummyRef={dummy} />
    </div>
  );
}

export default Chat;
