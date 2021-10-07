import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
const useStyles = makeStyles({
  container: {
    display: "flex",
    margin: "20px",
  },
  img: {
    maxWidth: "40px",
    width: "100%",
    marginRight: "20px",
    borderRadius: "50%",
  },
});
function Message({ message }) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <img
        className={classes.img}
        src={message.profilePhoto}
        alt={message.name}
      />
      <Typography>{message.text}</Typography>
    </div>
  );
}

export default Message;
