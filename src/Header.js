import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
} from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#ff7171",
    paddingRight: "79px",
    paddingLeft: "118px",
  },
  logo: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    color: "#FFFFFA",
    textAlign: "left",
  },
  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    size: "18px",
    marginLeft: "38px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

const headersData = [
  {
    label: "Seducer",
    href: "/seducer",
  },
  {
    label: "Victim",
    href: "/victim",
  },
  {
    label: "Charmer",
    href: "/charmer",
  },
  {
    label: "Naughty",
    href: "/naughty",
  },
];

export default function Header() {
  const { header, logo, menuButton, toolbar } = useStyles();
  const displayDekstop = () => {
    return (
      <Toolbar className={toolbar}>
        {kepalaKauLogo}
        <div> {getMenuButtons()} </div>
      </Toolbar>
    );
  };

  const kepalaKauLogo = (
    <Typography variant="h4" component="h1" className={logo}>
      Lust
    </Typography>
  );

  //menu function
  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Button
          {...{
            key: label,
            color: "inherit",
            to: href,
            component: RouterLink,
            className: menuButton,
          }}
        >
          {label}
        </Button>
      );
    });
  };

  return <AppBar className={header}>{displayDekstop()}</AppBar>;
}
