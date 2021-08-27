import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import Joseph from "../images/profilepic.jpeg";
import pdf from "../images/cv.pdf";
import TypeWriterEffect from "react-typewriter-effect";

const About = ({ title, dark, id }) => {
  const classes = useStyles();

  return (
    <div className={`${classes.section} ${dark && classes.sectiondark}`}>
      <div className={classes.sectioncontent} id={id}>
        <Typography variant="h3">{title}</Typography>
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image={Joseph}
            title="profilepic"
          />
          <CardContent className={classes.cardContent}>
            <TypeWriterEffect
              textStyle={{
                fontSize: "2rem",
                fontWeight: "700px",
                color: "#144659",
              }}
              startDelay={100}
              cursorColor="#fff"
              text="Me llamo Alejandro Rodríguez"
              typeSpeed={70}
            />
            <TypeWriterEffect
              textStyle={{ fontSize: "1.2rem", fontWeight: "500px", color: "#1F788C" }}
              startDelay={2500}
              cursorColor="#fff"
              text="Soy desarrollador desde los 12 años"
              typeSpeed={70}
            />
            <Typography variant="h6" color="textSecondary">{
            "Soy un Ingeniero en Software y redes, Ingeniero en Informática y Técnico en programación, líder de proyecto en una empresa de desarrollo de software, especializado en el desarrollo de aplicaciones para dispositivos móviles y aplicaciones híbridas, entusiasta y creativo, siempre encuentro una solución óptima para cualquier desafío que se me ponga enfrente."
          }</Typography>
            <Typography variant="h6" color="textSecondary">{"Encontré mi vocación desde que iba en secundaria teniendo una afición enorme por la programación, época en la que comencé brevemente a aprender distintos lenguajes como Ruby on Rails y javascript, mas adelante tomaría gusto por el desarrollo de aplicaciones móviles y aprendería a fondo lenguajes como Java, Swift, Objective-C, C# C++ y Kotlin hasta terminar aprendiendo el desarrollo de aplicaciones híbridas en Flutter con dart."
          }</Typography>
            <Typography variant="h6" color="textSecondary" className={classes.lastSection}>{"Cada día me propongo a aprender algo nuevo con el propósito de renovar y mejorar mis conocimientos, así como la calidad de mis trabajos."
            }</Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained" className={classes.pdfButton}>
              <a href={pdf} download>
                Descargar CV
              </a>
            </Button>
          </CardActions>
        </Card>
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
    margin: "0",
    padding: theme.spacing(5),
    "& h3": {
      marginLeft: theme.spacing(3),
    },
    "& h4": {
      color: "white",
    },
  },
  card: {
    marginTop: theme.spacing(6),
    display: "flex",
    minHeight: "70vh",
    height: "auto",
    position: "relative",
  },
  media: {
    maxWidth: "40vh",
    width: "1200px",
    height: "auto",
    maxHeight: "700px",
    objectFit: "cover",
    borderRadius: "10px",
    margin: theme.spacing(2),
  },
  cardContent: {
    position: "relative",
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(1),
    "& h6": {
      marginTop: theme.spacing(1),
    },
  },
  lastSection: {
    marginBottom: theme.spacing(10),
  },

  pdfButton: {
    position: "absolute",
    bottom: "1rem",
    right: "1rem",
    [theme.breakpoints.down("sm")]: {
      bottom: 2,
      right: "1rem",
    },
    backgroundColor: "#1F788C",
    padding: theme.spacing(3),
    "&:hover": {
      backgroundColor: "#32C8D9",
    },
    "& a": {
      color: "#fff",
      textDecoration: "none",
      fontWeight: 900,
    },
    "& a:hover": {
      color: "#1F788C",
    },
  },
}));

export default About;
