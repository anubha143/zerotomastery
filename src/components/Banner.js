import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Google from "./images/Google.svg";
import Apple from "./images/Apple.svg";
import Tesla from "./images/Tesla.svg";
import Amazon from "./images/Amazon.svg";
import Ibm from "./images/Ibm.png";
import Facebook from "./images/Facebook.png";

const useStyles = makeStyles((theme) => ({
  root: {
    // boxSizing: "border-box",
    width: "100%",
    boxShadow: "0px 0px 15px 5px rgba(19, 15, 235, 0.1)",
    paddingTop: 60,
    paddingBottom: 60,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  layout: {
    fontFamily: "barlow, sans-serif",
    textAlign: "center",
    fontWeight: 300,
    fontSize: 22,
  },
  imageLayout: {
    width: 159,
    height: 60,
    filter: "grayscale(100%)",
  },
}));
const Banner = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item>
        <Typography className={classes.layout}>
          Join 500,000+ Zero To Mastery students, getting hired by some of the
          best companies around the world:
        </Typography>
      </Grid>
      <Grid
        container
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: 28,
        }}
      >
        <Grid item>
          <img src={Google} alt="" className={classes.imageLayout} />
        </Grid>
        <Grid item>
          <img src={Apple} alt="" className={classes.imageLayout} />
        </Grid>
        <Grid item>
          <img src={Tesla} alt="" className={classes.imageLayout} />
        </Grid>
        <Grid item>
          <img src={Ibm} alt="" className={classes.imageLayout} />
        </Grid>
        <Grid item>
          <img src={Amazon} alt="" className={classes.imageLayout} />
        </Grid>
        <Grid item>
          <img src={Facebook} alt="" className={classes.imageLayout} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Banner;
