import React from "react";
import {
  Box,
  Button,
  makeStyles,
  rgbToHex,
  Typography,
} from "@material-ui/core";
import Logo from "./Logo";
const useStyles = makeStyles(() => ({
  root: {
    margin: 0,
    padding: 0,
    fontFamily: "barlow, sans-serif",
    minHeight: 80,
    boxSizing: "border-box",
    "& .MuiButton-outlinedSecondary": {
      borderRadius: 999,
    },
  },
  spacing: {
    cursor: "pointer",
  },
  center: {
    display: "flex",

    maxWidth: 1340,
    marginLeft: 50,
    marginRight: 50,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },

  link: {
    fontSize: 17,
    fontWeight: 300,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    "& a": {
      textDecoration: "none",
      fontSize: 17,
      fontWeight: 600,
      color: "rgb(55, 63, 73)",
      cursor: "pointer",
      marginRight: 22.5,
    },
  },
}));
const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.center}>
        {/* <h1 className={classes.spacing}>ZTM</h1> */}
        <Logo className={classes.spacing} />
        <div>
          <div className={classes.link}>
            <a href="">Academy</a>
            <a href="">Pricing</a>
            <a href="">Testimonials</a>
            <a href="">Blog</a>
            <a href="">Community</a>
            <div>
              <Button variant="outlined" color="secondary">
                Sign In
              </Button>
              <Button variant="outlined" color="secondary">
                Join Academy
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
