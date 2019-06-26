import React from "react";

import Avatar from "@material-ui/core/Avatar";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";

//import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import styles from "./styles";

const Login = props => {
  const { classes } = props;

  return (
    <div className={classes.layout}>
      <Typography component="h1" variant="h5" className={classes.logo}>
        Signin
      </Typography>
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
      </Paper>
    </div>
  );
};

export default withStyles(styles)(Login);
