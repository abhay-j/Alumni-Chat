import "./App.css";
import firebase from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import SignIn from "./components/SignIn";
import SignOut from "./components/SignOut";
import Chat from "./components/Chat";

import { Grid, Typography, CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  root: {
    // backgroundColor: "#2f3137",
    height: "100vh",
  },
  chatSection: {
    backgroundColor: "#23272A",
    overflow: "hidden",
    height: "100%",
  },
  sidebar: {
    backgroundColor: "#2C2F33",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
function App() {
  const [user] = useAuthState(firebase.auth());
  const classes = useStyles();
  return (
    <>
      <CssBaseline />

      <Grid className={classes.root} container spacing={3}>
        <Grid className={classes.sidebar} item xs={12} md={4}>
          <Typography variant="h5" component="h2" gutterBottom>
            VETERAN SQUAD
          </Typography>
          <Typography variant="caption" gutterBottom>
            For Alumni,By Alumni
          </Typography>
          {user ? <SignOut /> : <SignIn />}
          {user ? (
            <Typography variant="subtitle1">
              Signed In as : {user.displayName}
            </Typography>
          ) : null}
        </Grid>
        <Grid className={classes.chatSection} item xs={12} md={8}>
          {user ? <Chat /> : null}
        </Grid>
      </Grid>
    </>
  );
}

export default App;
