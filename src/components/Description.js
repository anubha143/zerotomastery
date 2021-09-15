import { Grid, makeStyles, Typography, Container } from "@material-ui/core";
import React from "react";
import Support from "./images/Support.webp";
import Image3 from "./images/Image3.webp";
import Image4 from "./images/Image4.webp";
import Image5 from "./images/Image5.webp";
import Image6 from "./images/Image6.webp";
import Image7 from "./images/Image7.webp";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
    marginTop: 30,
    marginBottom: 30,
  },
  textStyle: {
    textTransform: "uppercase",
    fontSize: 40,
    fontWeight: 700,
    // textAlign: "center",
    fontFamily: "barlow, sans-serif",
    // marginTop: 50,
  },
  imageSize: {
    width: 534.58,
    height: 350,
    objectFit: "contain",
  },
  descripText: {
    fontSize: 36,
    fontWeight: 700,
    alignItems: "center",
    fontFamily: "barlow, sans-serif",
    marginTop: 80,
  },
  descripText2: {
    fontSize: 22,
    fontWeight: 300,
    fontFamily: "barlow, sans-serif",
  },
}));
const Description = () => {
  const classes = useStyles();
  return (
    <Container>
      <div style={{ marginTop: 80, textAlign: "center" }}>
        <Typography className={classes.textStyle}>
          what you can get by joining zero to mastery
        </Typography>
      </div>
      <Grid container className={classes.root}>
        {/* <Grid
          item
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography className={classes.textStyle}>
            what you can get by joining zero to mastery
          </Typography>
        </Grid> */}
        <Grid container>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: 40,
              marginBottom: 40,
            }}
          >
            <Grid item>
              <img src={Support} alt="" className={classes.imageSize} />
            </Grid>
            <Grid container>
              <Grid item>
                <Typography className={classes.descripText}>
                  Learn to code, on your schedule
                </Typography>

                <Typography className={classes.descripText2}>
                  Our comprehensive courses have 600+ hours (and counting) of
                  lessons available 24/7. You’ll learn everything from beginner
                  programming fundamentals to the most advanced concepts.
                </Typography>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
      {/* part2 */}

      <Grid container>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: 40,
            marginBottom: 40,
          }}
        >
          <Grid container>
            <Grid item>
              <Typography className={classes.descripText}>
                Build your protfolio
              </Typography>

              <Typography className={classes.descripText2}>
                Unlike most online courses and free tutorials, you’ll be using
                everything you learn to build complex, professional, real-world
                projects and your own professional portfolio website.
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <img src={Image3} alt="" className={classes.imageSize} />
          </Grid>
        </div>
      </Grid>

      {/* part3 */}
      <Grid container>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: 40,
            marginBottom: 40,
          }}
        >
          <Grid item>
            <img src={Image4} alt="" className={classes.imageSize} />
          </Grid>
          <Grid container>
            <Grid item>
              <Typography className={classes.descripText}>
                Learn to code, on your schedule
              </Typography>

              <Typography className={classes.descripText2}>
                Find your next opportunity, get that key introduction, even meet
                a co-founder. Someone in our thriving and supportive ZTM
                community is always online willing to lend a hand.
              </Typography>
            </Grid>
          </Grid>
        </div>
      </Grid>

      {/* part4 */}
      <Grid container>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: 40,
            marginBottom: 40,
          }}
        >
          <Grid container>
            <Grid item>
              <Typography className={classes.descripText}>Get Hired</Typography>

              <Typography className={classes.descripText2}>
                You’ll gain the knowledge, confidence, experience you need to
                ace interviews and receive offers from any company you can
                imagine.
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <img src={Image5} alt="" className={classes.imageSize} />
          </Grid>
        </div>
      </Grid>

      {/* part5 */}

      <Grid container>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: 40,
            marginBottom: 40,
          }}
        >
          <Grid item>
            <img src={Image6} alt="" className={classes.imageSize} />
          </Grid>
          <Grid container>
            <Grid item>
              <Typography className={classes.descripText}>
                Get promoted, become top 10%
              </Typography>

              <Typography className={classes.descripText2}>
                Our intermediate and advanced courses help you continue to build
                your skills, advance you to senior roles and get you recognized
                as one of the best developers at your company.
              </Typography>
            </Grid>
          </Grid>
        </div>
      </Grid>
      {/* part6 */}

      <Grid container>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: 40,
            marginBottom: 40,
          }}
        >
          <Grid container>
            <Grid item>
              <Typography className={classes.descripText}>
                Never stop growing
              </Typography>

              <Typography className={classes.descripText2}>
                We regularly release new courses and exclusive content for ZTM
                Academy students to make sure you stay ahead of the curve.
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <img src={Image7} alt="" className={classes.imageSize} />
          </Grid>
        </div>
      </Grid>
    </Container>
  );
};

export default Description;
