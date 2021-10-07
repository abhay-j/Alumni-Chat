import React from "react";
import firebase from "../firebase";
import { Button } from "@material-ui/core";
function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  };
  return (
    <div>
      <Button variant="outlined" onClick={signInWithGoogle}>
        Sign In with google
      </Button>
    </div>
  );
}

export default SignIn;
