import React from "react";
import firebase from "../firebase";
import { Button } from "@material-ui/core";

function SignOut() {
  return (
    <div>
      <Button
        variant="outlined"
        onClick={() => {
          firebase.auth().signOut();
        }}
      >
        SignOut
      </Button>
    </div>
  );
}

export default SignOut;
