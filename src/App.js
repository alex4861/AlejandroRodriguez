import {
  createMuiTheme,
  makeStyles,
  MuiThemeProvider,
} from "@material-ui/core";
import React from "react";
import About from "./Components/About";
import Contact from "./Components/Contact";
import MyWork from "./Components/MyWork";
import Navbar from "./Components/Navbar";
import Skills from "./Components/Skills";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#144659" },
    secondary: { main: "#144659" },
    tertiary: {main: "#732240"},
    
  },
});

const App = () => {
  const classes = useStyles();
  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <Navbar />
        <About title="Acerca de mí" dark={true} id="about" />
        <Skills title="Habilidades" dark={false} id="skills" />
        <MyWork title="Mis trabajos" dark={true} id="work" />
        <Contact title="Contacto" dark={false} id="contact" />
      </div>
    </MuiThemeProvider>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
  },
}));

export default App;
