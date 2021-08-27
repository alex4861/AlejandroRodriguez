import {
  AppBar,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  makeStyles,
  Toolbar,
} from "@material-ui/core";
import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import logo from "../images/logo.png";
import MenuIcon from "@material-ui/icons/Menu";
import CancelIcon from "@material-ui/icons/Cancel";
import InfoTwoToneIcon from "@material-ui/icons/InfoTwoTone";
import EmojiObjectsTwoToneIcon from "@material-ui/icons/EmojiObjectsTwoTone";
import BuildTwoToneIcon from "@material-ui/icons/BuildTwoTone";
import ContactMailTwoToneIcon from "@material-ui/icons/ContactMailTwoTone";

const Navbar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const links = [
    {
      id: "about",
      text: "Acerca de mí",
      icon: <InfoTwoToneIcon fontSize="large" />,
    },
    {
      id: "skills",
      text: "Habilidades",
      icon: (
        <EmojiObjectsTwoToneIcon fontSize="large" className={classes.light} />
      ),
    },
    {
      id: "work",
      text: "Mis trabajos",
      icon: <BuildTwoToneIcon fontSize="large" />,
    },
    {
      id: "contact",
      text: "Contacto",
      icon: <ContactMailTwoToneIcon fontSize="large" />,
    },
  ];

  return (
    <>
      <AppBar position="sticky" className={classes.root} id="navbar">
        <Toolbar className={classes.toolbar}>
          <img
            src={logo}
            className={classes.logo}
            alt="Logo"
            onClick={scrollToTop}
          />
          <List className={classes.menu}>
            {links.map(({ id, text }, index) => (
              <Link
                key={index}
                activeClass="active"
                to={id}
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
              >
                {text}
              </Link>
            ))}
          </List>
          <IconButton
            onClick={() => setOpen(!open)}
            edge="end"
            className={classes.menuButton}
            aria-label="menu"
          >
            <MenuIcon fontSize="large" />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <IconButton
          className={classes.menuButton}
          onClick={() => setOpen(false)}
        >
          <CancelIcon fontSize="large" />
        </IconButton>
        <Divider />
        {links.map(({ id, text, icon }, index) => (
          <Link
            key={index}
            className={classes.sidebar}
            activeClass="active"
            to={id}
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
          >
            <ListItem component="h5">
              <span>
                <ListItemIcon>{icon}</ListItemIcon>
              </span>
              {text}
            </ListItem>
          </Link>
        ))}
      </Drawer>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#1F788C",
    top: 0,
    zIndex: 999,
  },
  toolbar: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  logo: {
    height: "4rem",
    objectFit: "contain",
    "&:hover": {
      cursor: "pointer",
    },
  },
  light: {
    color: "#144659",
  },
  menu: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    margin: theme.spacing(3),
    "& a": {
      fontSize: "1.4rem",
      color: "#333",
      fontWeight: "bold",
      marginLeft: theme.spacing(3),
    },
    "& a:hover": {
      color: "white",
      cursor: "pointer",
    },
  },
  menuButton: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      color: "white",
      position: "fixed",
      top: 0,
      right: 10,
    },
    "&:hover": {
      color: "#ccc",
    },
  },

  sidebar: {
    width: "40vw",
    [theme.breakpoints.down("sm")]: {
      width: "60vw",
    },
    "& h5": {
      margin: theme.spacing(10, 0, 0, 4),
      fontSize: "1.4rem",
      color: "#333",
      fontWeight: "bold",
      [theme.breakpoints.down("sm")]: {
        fontSize: "0.9rem",
      },
    },
    "& h5:hover": {
      color: "white",
      cursor: "pointer",
    },
  },
}));

export default Navbar;
