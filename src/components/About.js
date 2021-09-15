import React from "react";
import {
  Button,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Image from "./images/Image.webp";
const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "barlow, sans-serif",
    marginLeft: "auto",
    marginRight: "auto",
    "& .MuiButton-outlinedSecondary": {
      borderRadius: 999,
    },
  },
  heading1: {
    fontSize: 64,
    fontWeight: 700,
  },
  para: {
    fontSize: 28,
    fontWeight: 300,
    color: "#373F49",
    // maxWidth: 883.33,
    minHeight: 129.41,
  },
  buttonLayout: {
    marginTop: 60,
    display: "flex",

    // justifyContent: "center",
    alignItems: "center",
  },
  linkTag: {
    textDecoration: "none",
    color: "rgb(245, 23, 103)",
    marginLeft: 60,
    fontSize: 20,
    fontWeight: 700,
  },
  linkButton: {
    textDecoration: "none",
    textTransform: "uppercase",
    backgroundColor: "rgb(245, 23, 103)",
    color: "white",
    fontSize: 20,
    fontWeight: 700,
    border: "2px solid rgb(245, 23, 103)",
    outline: "none",
    paddingLeft: 60,
    paddingRight: 60,
    borderRadius: 999,
    height: 70,
  },
}));
const About = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="xl">
      <Grid container className={classes.root}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div>
            <Grid item xs={12}>
              <h1 className={classes.heading1}>LEARN TO CODE. GET HIRED. </h1>
            </Grid>
            <Grid item>
              <Typography className={classes.para}>
                Whether you are just starting to learn to code or want to
                advance your skills, Zero To Mastery Academy will teach you
                React, JavaScript, Python, CSS and more to help you advance your
                career, get hired and succeed at the top companies in the world.
              </Typography>
            </Grid>
            <Grid container item className={classes.buttonLayout}>
              <Grid item>
                <button className={classes.linkButton}>join the academy</button>
              </Grid>
              <Grid item>
                <a href="" className={classes.linkTag}>
                  SEE ALL COURSES
                </a>
              </Grid>
            </Grid>
          </div>
          <div>
            <Grid item>
              <img src={Image} />
            </Grid>
          </div>
        </div>
      </Grid>
    </Container>
  );
};

export default About;
