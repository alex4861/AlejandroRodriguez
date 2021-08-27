import {
  Button,
  makeStyles,
  Paper,
  TextField,
  Typography,
  FormControl
} from "@material-ui/core";
import React from "react";

const Contact = ({ title, dark, id }) => {
  const classes = useStyles();

  return (
    <div className={`${classes.section} ${dark && classes.sectiondark}`}>
      <div className={classes.sectioncontent} id={id}>
        <Typography variant="h4">{title}</Typography>
        <Paper className={classes.root}>
          <div className={classes.titlenadchoices}>
            <Typography variant="h5">Contáctame</Typography>
            <div className={classes.choices}>
            </div>
          </div>

          <FormControl fullWidth className={classes.margin}>
            <TextField 
            color="secondary"
                      variant="outlined"
                      label="Tu nombre" />
          </FormControl>
          <FormControl fullWidth className={classes.margin}>
            <TextField
                      variant="outlined"
                      label="tu Correo electrónico" />
          </FormControl>
          <FormControl fullWidth className={classes.margin} >
            <TextField
                      variant="outlined"
                      multiline label="Tú consulta" />
          </FormControl>

          <Button variant="contained">Enviar</Button>
        </Paper>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  section: {
    minHeight: "100vh",
  },
  sectiondark: {
    background: "#333",
    color: "white",
  },
  sectioncontent: {
    maxWidth: "80vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(5),
    "& h4": {
      marginBottom: theme.spacing(4),
    },
  },
  root: {
    background: "#2AA4BF",
    color: "#fff",
    fontSize: "1.2rem",
    maxWidth: "500px",
    height: "content-fit",
    width: "70vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: theme.spacing(4),
    "& button": {
      backgroundColor: "#fff",
      color: "#1F788C",
      fontWeight: 900,
      fontSize: "1.2rem",
      marginTop: theme.spacing(4),
    },
    "& button:hover": {
      backgroundColor: "#144659",
      color: "#fff",
    },
    '& .MuiTextField-root': {
      color: "secondary",
      margin: theme.spacing(1),
    },

  },
  titlenadchoices: {
    "& h5": {
      textAlign: "center",
      fontWeight: 900,
      fontSize: "1.5rem",
      marginBottom: theme.spacing(3),
    },
  },
  choices: {
    color: "#fff",
    display: "flex",
    alignItems: "center",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    "& input": {
    },
  },
}));

export default Contact;
