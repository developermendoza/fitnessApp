import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import barbellBench from "../images/muscle/chest-abs/01-barbell_bench.jpg";
import inclineDumbbellBenchPress from "../images/muscle/chest-abs/02-incline-dumbbell-bench-press.jpg";
import inclineDumbbellFly from "../images/muscle/chest-abs/03-incline-dumbbell-fly.jpg";
import dips from "../images/muscle/chest-abs/04-dips.jpg";
import weightedsitups from "../images/muscle/chest-abs/05-weightedsitups.jpg";
import kneelingCableCrunch from "../images/muscle/chest-abs/06-kneeling-cable-crunch.jpg";

import barbellSquats from "../images/muscle/legs/07-barbell-squats.jpg";
import dumbellLunge from "../images/muscle/legs/08-dumbbell-lunge.jpg";
import legPress from "../images/muscle/legs/09-leg-press.jpg";
import legExtension from "../images/muscle/legs/10-Leg-extension.jpg";
import barbellStraightLegDeadlift from "../images/muscle/legs/11-Barbell-straight-leg deadlift.jpg";
import lyingLegCurl from "../images/muscle/legs/12-Lying-leg-curl.jpg";
import calfRaises from "../images/muscle/legs/13-Calf-raises.jpg";

import UnderhandPullUps from "../images/muscle/arms/14-Underhand-pull-ups.jpg";
import AlternatingBicepCurl from "../images/muscle/arms/15-Alternating-bicep-curl.png";
import EZBarCurl from "../images/muscle/arms/16-EZ-bar-curl.jpg";
import LyingTricepsExtension from "../images/muscle/arms/17-Lying-triceps-extension.jpg";
import cablePushdown from "../images/muscle/arms/18-Cable-pushdown.jpg";
import dumbbellOverheadExtension from "../images/muscle/arms/19-Dumbbell-overhead-extension.jpg";

import SeatedDumbbellShoulderPress from "../images/muscle/shoulders-abs/20-Seated-dumbbell-shoulder-press.jpg";
import bentOverLateralRaises from "../images/muscle/shoulders-abs/21-Bent-over-Lateral-raises.jpg";
import frontRaise from "../images/muscle/shoulders-abs/22-Front-raise.jpg";
import lateralRaise from "../images/muscle/shoulders-abs/23-Lateral-raise.jpg";
import cableUprightRow from "../images/muscle/shoulders-abs/24-Cable-upright-row.jpg";
import medicineBallRussianTwist from "../images/muscle/shoulders-abs/25-Medicine-ball-Russian-twist.jpg";
import legRaise from "../images/muscle/shoulders-abs/26-Leg-raise.jpg";

const GetMuscle = () => {
  return (
    <div>
      <Container>
        <Typography variant="h3" component="h1">
          The 'Get Muscle' Workout Plan
        </Typography>
        <Typography component="p" sx={{ color: "grey" }}>
          Do this low-repetition, high-weights programme for weeks one, three,
          five, seven and nine. Rest for 60 to 90 seconds between sets to make
          sure you're fully recovered and constantly try to increase the weights
          you're lifting.
        </Typography>
      </Container>
      <div
        style={{ background: "#F1F1F1", padding: "10px 0", margin: "40px 0" }}
      >
        <Container>
          <Typography component="h2" variant="h4" style={{ fontWeight: "700" }}>
            Monday: Chest and Abs
          </Typography>
        </Container>
      </div>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <p style={{ fontWeight: "bold", textAlign: "center" }}>
              <span
                style={{
                  background: "#656CF1",
                  borderRadius: "50px",
                  display: "inline-flex",
                  width: "30px",
                  height: "30px",
                  color: "white",
                  textAlign: "center",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "18px",
                  fontWeight: "bold",
                  marginRight: "10px",
                }}
              >
                1
              </span>
              Barbell Bench Press
            </p>
            <div style={{ textAlign: "center" }}>
              <img src={barbellBench} alt="" style={{ width: "200px" }} />
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ display: "inline-block", textAlign: "left" }}>
                <p style={{ color: "grey", fontWeight: "bold" }}>
                  <span style={{ color: "black" }}>Sets:</span> 5
                </p>
                <p style={{ color: "grey", fontWeight: "bold" }}>
                  <span style={{ color: "black" }}>Reps: </span>12, 8, 6, 4, 12
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <p style={{ fontWeight: "bold", textAlign: "center" }}>
              <span
                style={{
                  background: "#656CF1",
                  borderRadius: "50px",
                  display: "inline-flex",
                  width: "30px",
                  height: "30px",
                  color: "white",
                  textAlign: "center",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "18px",
                  fontWeight: "bold",
                  marginRight: "10px",
                }}
              >
                2
              </span>
              Incline Dumbell Press
            </p>
            <div style={{ textAlign: "center" }}>
              <img
                src={inclineDumbbellBenchPress}
                alt=""
                style={{ width: "200px" }}
              />
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ display: "inline-block", textAlign: "left" }}>
                <p style={{ color: "grey", fontWeight: "bold" }}>
                  <span style={{ color: "black" }}>Sets:</span> 4
                </p>
                <p style={{ color: "grey", fontWeight: "bold" }}>
                  <span style={{ color: "black" }}>Reps: </span>8, 6, 6, 6
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <p style={{ fontWeight: "bold", textAlign: "center" }}>
              <span
                style={{
                  background: "#656CF1",
                  borderRadius: "50px",
                  display: "inline-flex",
                  width: "30px",
                  height: "30px",
                  color: "white",
                  textAlign: "center",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "18px",
                  fontWeight: "bold",
                  marginRight: "10px",
                }}
              >
                3
              </span>
              Incline Flies
            </p>
            <div style={{ textAlign: "center" }}>
              <img src={inclineDumbbellFly} alt="" style={{ width: "200px" }} />
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ display: "inline-block", textAlign: "left" }}>
                <p style={{ color: "grey", fontWeight: "bold" }}>
                  <span style={{ color: "black" }}>Sets:</span> 4
                </p>
                <p style={{ color: "grey", fontWeight: "bold" }}>
                  <span style={{ color: "black" }}>Reps: </span>8, 6, 6, 6
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <p style={{ fontWeight: "bold", textAlign: "center" }}>
              <span
                style={{
                  background: "#656CF1",
                  borderRadius: "50px",
                  display: "inline-flex",
                  width: "30px",
                  height: "30px",
                  color: "white",
                  textAlign: "center",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "18px",
                  fontWeight: "bold",
                  marginRight: "10px",
                }}
              >
                4
              </span>
              Dips
            </p>
            <div style={{ textAlign: "center" }}>
              <img src={dips} alt="" style={{ width: "200px" }} />
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ display: "inline-block", textAlign: "left" }}>
                <p style={{ color: "grey", fontWeight: "bold" }}>
                  <span style={{ color: "black" }}>Sets:</span> 4
                </p>
                <p style={{ color: "grey", fontWeight: "bold" }}>
                  <span style={{ color: "black" }}>Reps: </span>8, 6, 6, 6
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <p style={{ fontWeight: "bold", textAlign: "center" }}>
              <span
                style={{
                  background: "#656CF1",
                  borderRadius: "50px",
                  display: "inline-flex",
                  width: "30px",
                  height: "30px",
                  color: "white",
                  textAlign: "center",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "18px",
                  fontWeight: "bold",
                  marginRight: "10px",
                }}
              >
                5
              </span>
              Weighted sit-up
            </p>
            <div style={{ textAlign: "center" }}>
              <img src={weightedsitups} alt="" style={{ width: "200px" }} />
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ display: "inline-block", textAlign: "left" }}>
                <p style={{ color: "grey", fontWeight: "bold" }}>
                  <span style={{ color: "black" }}>Sets:</span> 5
                </p>
                <p style={{ color: "grey", fontWeight: "bold" }}>
                  <span style={{ color: "black" }}>Reps: </span>10
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <p style={{ fontWeight: "bold", textAlign: "center" }}>
              <span
                style={{
                  background: "#656CF1",
                  borderRadius: "50px",
                  display: "inline-flex",
                  width: "30px",
                  height: "30px",
                  color: "white",
                  textAlign: "center",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "18px",
                  fontWeight: "bold",
                  marginRight: "10px",
                }}
              >
                6
              </span>
              Kneeling cable crunch
            </p>
            <div style={{ textAlign: "center" }}>
              <img
                src={kneelingCableCrunch}
                alt=""
                style={{ width: "200px" }}
              />
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ display: "inline-block", textAlign: "left" }}>
                <p style={{ color: "grey", fontWeight: "bold" }}>
                  <span style={{ color: "black" }}>Sets:</span> 4
                </p>
                <p style={{ color: "grey", fontWeight: "bold" }}>
                  <span style={{ color: "black" }}>Reps: </span>8
                </p>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
      <div
        style={{ background: "#F1F1F1", padding: "10px 0", margin: "40px 0" }}
      >
        <Container>
          <Typography component="h2" variant="h4" style={{ fontWeight: "700" }}>
            Tuesday: Legs
          </Typography>
        </Container>
      </div>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <p style={{ fontWeight: "bold", textAlign: "center" }}>
              <span
                style={{
                  background: "#656CF1",
                  borderRadius: "50px",
                  display: "inline-flex",
                  width: "30px",
                  height: "30px",
                  color: "white",
                  textAlign: "center",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "18px",
                  fontWeight: "bold",
                  marginRight: "10px",
                }}
              >
                1
              </span>
              Barbell squats
            </p>
            <div style={{ textAlign: "center" }}>
              <img src={barbellSquats} alt="" style={{ width: "200px" }} />
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ display: "inline-block", textAlign: "left" }}>
                <p style={{ color: "grey", fontWeight: "bold" }}>
                  <span style={{ color: "black" }}>Sets:</span> 5
                </p>
                <p style={{ color: "grey", fontWeight: "bold" }}>
                  <span style={{ color: "black" }}>Reps: </span>12, 10, 8, 8, 6
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <p style={{ fontWeight: "bold", textAlign: "center" }}>
              <span
                style={{
                  background: "#656CF1",
                  borderRadius: "50px",
                  display: "inline-flex",
                  width: "30px",
                  height: "30px",
                  color: "white",
                  textAlign: "center",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "18px",
                  fontWeight: "bold",
                  marginRight: "10px",
                }}
              >
                2
              </span>
              Dumbell Lunge
            </p>
            <div style={{ textAlign: "center" }}>
              <img src={dumbellLunge} alt="" style={{ width: "200px" }} />
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ display: "inline-block", textAlign: "left" }}>
                <p style={{ color: "grey", fontWeight: "bold" }}>
                  <span style={{ color: "black" }}>Sets:</span> 4
                </p>
                <p style={{ color: "grey", fontWeight: "bold" }}>
                  <span style={{ color: "black" }}>Reps: </span>12, 12, 12, 12
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <p style={{ fontWeight: "bold", textAlign: "center" }}>
              <span
                style={{
                  background: "#656CF1",
                  borderRadius: "50px",
                  display: "inline-flex",
                  width: "30px",
                  height: "30px",
                  color: "white",
                  textAlign: "center",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "18px",
                  fontWeight: "bold",
                  marginRight: "10px",
                }}
              >
                3
              </span>
              Leg Press
            </p>
            <div style={{ textAlign: "center" }}>
              <img src={legPress} alt="" style={{ width: "200px" }} />
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ display: "inline-block", textAlign: "left" }}>
                <p style={{ color: "grey", fontWeight: "bold" }}>
                  <span style={{ color: "black" }}>Sets:</span> 4
                </p>
                <p style={{ color: "grey", fontWeight: "bold" }}>
                  <span style={{ color: "black" }}>Reps: </span>10, 8, 6, 6
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <p style={{ fontWeight: "bold", textAlign: "center" }}>
              <span
                style={{
                  background: "#656CF1",
                  borderRadius: "50px",
                  display: "inline-flex",
                  width: "30px",
                  height: "30px",
                  color: "white",
                  textAlign: "center",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "18px",
                  fontWeight: "bold",
                  marginRight: "10px",
                }}
              >
                4
              </span>
              Leg Extension
            </p>
            <div style={{ textAlign: "center" }}>
              <img src={legExtension} alt="" style={{ width: "200px" }} />
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ display: "inline-block", textAlign: "left" }}>
                <p style={{ color: "grey", fontWeight: "bold" }}>
                  <span style={{ color: "black" }}>Sets:</span> 4
                </p>
                <p style={{ color: "grey", fontWeight: "bold" }}>
                  <span style={{ color: "black" }}>Reps: </span>12, 12, 12, 12
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <p style={{ fontWeight: "bold", textAlign: "center" }}>
              <span
                style={{
                  background: "#656CF1",
                  borderRadius: "50px",
                  display: "inline-flex",
                  width: "30px",
                  height: "30px",
                  color: "white",
                  textAlign: "center",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "18px",
                  fontWeight: "bold",
                  marginRight: "10px",
                }}
              >
                5
              </span>
              Barbell Straight Leg Deadlift
            </p>
            <div style={{ textAlign: "center" }}>
              <img
                src={barbellStraightLegDeadlift}
                alt=""
                style={{ width: "200px" }}
              />
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ display: "inline-block", textAlign: "left" }}>
                <p style={{ color: "grey", fontWeight: "bold" }}>
                  <span style={{ color: "black" }}>Sets:</span> 4
                </p>
                <p style={{ color: "grey", fontWeight: "bold" }}>
                  <span style={{ color: "black" }}>Reps: </span>12, 8, 6, 6
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <p style={{ fontWeight: "bold", textAlign: "center" }}>
              <span
                style={{
                  background: "#656CF1",
                  borderRadius: "50px",
                  display: "inline-flex",
                  width: "30px",
                  height: "30px",
                  color: "white",
                  textAlign: "center",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "18px",
                  fontWeight: "bold",
                  marginRight: "10px",
                }}
              >
                6
              </span>
              Lying Leg Curl
            </p>
            <div style={{ textAlign: "center" }}>
              <img src={lyingLegCurl} alt="" style={{ width: "200px" }} />
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ display: "inline-block", textAlign: "left" }}>
                <p style={{ color: "grey", fontWeight: "bold" }}>
                  <span style={{ color: "black" }}>Sets:</span> 4
                </p>
                <p style={{ color: "grey", fontWeight: "bold" }}>
                  <span style={{ color: "black" }}>Reps: </span>8, 8, 8, 8
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <p style={{ fontWeight: "bold", textAlign: "center" }}>
              <span
                style={{
                  background: "#656CF1",
                  borderRadius: "50px",
                  display: "inline-flex",
                  width: "30px",
                  height: "30px",
                  color: "white",
                  textAlign: "center",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "18px",
                  fontWeight: "bold",
                  marginRight: "10px",
                }}
              >
                7
              </span>
              Calf Raises
            </p>
            <div style={{ textAlign: "center" }}>
              <img src={calfRaises} alt="" style={{ width: "200px" }} />
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ display: "inline-block", textAlign: "left" }}>
                <p style={{ color: "grey", fontWeight: "bold" }}>
                  <span style={{ color: "black" }}>Sets:</span> 5
                </p>
                <p style={{ color: "grey", fontWeight: "bold" }}>
                  <span style={{ color: "black" }}>Reps: </span>12, 10, 10, 8,
                  12
                </p>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
      <div
        style={{ background: "#F1F1F1", padding: "10px 0", margin: "40px 0" }}
      >
        <Container>
          <Typography component="h2" variant="h4" style={{ fontWeight: "700" }}>
            Wednesday: Arms
          </Typography>
        </Container>
      </div>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <p style={{ fontWeight: "bold", textAlign: "center" }}>
              <span
                style={{
                  background: "#656CF1",
                  borderRadius: "50px",
                  display: "inline-flex",
                  width: "30px",
                  height: "30px",
                  color: "white",
                  textAlign: "center",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "18px",
                  fontWeight: "bold",
                  marginRight: "10px",
                }}
              >
                1
              </span>
              Underhand PullUps
            </p>
            <div style={{ textAlign: "center" }}>
              <img src={UnderhandPullUps} alt="" style={{ width: "200px" }} />
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ display: "inline-block", textAlign: "left" }}>
                <p style={{ color: "grey", fontWeight: "bold" }}>
                  <span style={{ color: "black" }}>Sets:</span> 5
                </p>
                <p style={{ color: "grey", fontWeight: "bold" }}>
                  <span style={{ color: "black" }}>Reps: </span>10
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <p style={{ fontWeight: "bold", textAlign: "center" }}>
              <span
                style={{
                  background: "#656CF1",
                  borderRadius: "50px",
                  display: "inline-flex",
                  width: "30px",
                  height: "30px",
                  color: "white",
                  textAlign: "center",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "18px",
                  fontWeight: "bold",
                  marginRight: "10px",
                }}
              >
                2
              </span>
              Alternating Bicep Curl
            </p>
            <div style={{ textAlign: "center" }}>
              <img
                src={AlternatingBicepCurl}
                alt=""
                style={{ width: "200px" }}
              />
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ display: "inline-block", textAlign: "left" }}>
                <p style={{ color: "grey", fontWeight: "bold" }}>
                  <span style={{ color: "black" }}>Sets:</span> 4
                </p>
                <p style={{ color: "grey", fontWeight: "bold" }}>
                  <span style={{ color: "black" }}>Reps: </span>12, 8, 8, 8
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <p style={{ fontWeight: "bold", textAlign: "center" }}>
              <span
                style={{
                  background: "#656CF1",
                  borderRadius: "50px",
                  display: "inline-flex",
                  width: "30px",
                  height: "30px",
                  color: "white",
                  textAlign: "center",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "18px",
                  fontWeight: "bold",
                  marginRight: "10px",
                }}
              >
                3
              </span>
              EZ Bar Curl
            </p>
            <div style={{ textAlign: "center" }}>
              <img src={EZBarCurl} alt="" style={{ width: "200px" }} />
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ display: "inline-block", textAlign: "left" }}>
                <p style={{ color: "grey", fontWeight: "bold" }}>
                  <span style={{ color: "black" }}>Sets:</span> 4
                </p>
                <p style={{ color: "grey", fontWeight: "bold" }}>
                  <span style={{ color: "black" }}>Reps: </span>12, 8, 6, 6
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <p style={{ fontWeight: "bold", textAlign: "center" }}>
              <span
                style={{
                  background: "#656CF1",
                  borderRadius: "50px",
                  display: "inline-flex",
                  width: "30px",
                  height: "30px",
                  color: "white",
                  textAlign: "center",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "18px",
                  fontWeight: "bold",
                  marginRight: "10px",
                }}
              >
                4
              </span>
              Lying Triceps Extension
            </p>
            <div style={{ textAlign: "center" }}>
              <img
                src={LyingTricepsExtension}
                alt=""
                style={{ width: "200px" }}
              />
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ display: "inline-block", textAlign: "left" }}>
                <p style={{ color: "grey", fontWeight: "bold" }}>
                  <span style={{ color: "black" }}>Sets:</span> 5
                </p>
                <p style={{ color: "grey", fontWeight: "bold" }}>
                  <span style={{ color: "black" }}>Reps: </span>10, 8, 8, 8
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <p style={{ fontWeight: "bold", textAlign: "center" }}>
              <span
                style={{
                  background: "#656CF1",
                  borderRadius: "50px",
                  display: "inline-flex",
                  width: "30px",
                  height: "30px",
                  color: "white",
                  textAlign: "center",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "18px",
                  fontWeight: "bold",
                  marginRight: "10px",
                }}
              >
                5
              </span>
              Cable Pushdown
            </p>
            <div style={{ textAlign: "center" }}>
              <img src={cablePushdown} alt="" style={{ width: "200px" }} />
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ display: "inline-block", textAlign: "left" }}>
                <p style={{ color: "grey", fontWeight: "bold" }}>
                  <span style={{ color: "black" }}>Sets:</span> 4
                </p>
                <p style={{ color: "grey", fontWeight: "bold" }}>
                  <span style={{ color: "black" }}>Reps: </span>8, 6, 6, 6
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <p style={{ fontWeight: "bold", textAlign: "center" }}>
              <span
                style={{
                  background: "#656CF1",
                  borderRadius: "50px",
                  display: "inline-flex",
                  width: "30px",
                  height: "30px",
                  color: "white",
                  textAlign: "center",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "18px",
                  fontWeight: "bold",
                  marginRight: "10px",
                }}
              >
                6
              </span>
              Dumbbell Overhead Extension
            </p>
            <div style={{ textAlign: "center" }}>
              <img
                src={dumbbellOverheadExtension}
                alt=""
                style={{ width: "200px" }}
              />
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ display: "inline-block", textAlign: "left" }}>
                <p style={{ color: "grey", fontWeight: "bold" }}>
                  <span style={{ color: "black" }}>Sets:</span> 4
                </p>
                <p style={{ color: "grey", fontWeight: "bold" }}>
                  <span style={{ color: "black" }}>Reps: </span>8, 6, 6, 6
                </p>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
      <div
        style={{ background: "#F1F1F1", padding: "10px 0", margin: "40px 0" }}
      >
        <Container>
          <Typography component="h2" variant="h4" style={{ fontWeight: "700" }}>
            Friday: Shoulders and Abs
          </Typography>
        </Container>
      </div>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <p style={{ fontWeight: "bold", textAlign: "center" }}>
              <span
                style={{
                  background: "#656CF1",
                  borderRadius: "50px",
                  display: "inline-flex",
                  width: "30px",
                  height: "30px",
                  color: "white",
                  textAlign: "center",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "18px",
                  fontWeight: "bold",
                  marginRight: "10px",
                }}
              >
                1
              </span>
              Seated Dumbbell Shoulder Press
            </p>
            <div style={{ textAlign: "center" }}>
              <img
                src={SeatedDumbbellShoulderPress}
                alt=""
                style={{ width: "200px" }}
              />
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ display: "inline-block", textAlign: "left" }}>
                <p style={{ color: "grey", fontWeight: "bold" }}>
                  <span style={{ color: "black" }}>Sets:</span> 5
                </p>
                <p style={{ color: "grey", fontWeight: "bold" }}>
                  <span style={{ color: "black" }}>Reps: </span>12, 10, 8, 8, 6
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <p style={{ fontWeight: "bold", textAlign: "center" }}>
              <span
                style={{
                  background: "#656CF1",
                  borderRadius: "50px",
                  display: "inline-flex",
                  width: "30px",
                  height: "30px",
                  color: "white",
                  textAlign: "center",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "18px",
                  fontWeight: "bold",
                  marginRight: "10px",
                }}
              >
                2
              </span>
              Bent Over Lateral Raises
            </p>
            <div style={{ textAlign: "center" }}>
              <img
                src={bentOverLateralRaises}
                alt=""
                style={{ width: "200px" }}
              />
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ display: "inline-block", textAlign: "left" }}>
                <p style={{ color: "grey", fontWeight: "bold" }}>
                  <span style={{ color: "black" }}>Sets:</span> 4
                </p>
                <p style={{ color: "grey", fontWeight: "bold" }}>
                  <span style={{ color: "black" }}>Reps: </span>12, 8, 8, 8
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <p style={{ fontWeight: "bold", textAlign: "center" }}>
              <span
                style={{
                  background: "#656CF1",
                  borderRadius: "50px",
                  display: "inline-flex",
                  width: "30px",
                  height: "30px",
                  color: "white",
                  textAlign: "center",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "18px",
                  fontWeight: "bold",
                  marginRight: "10px",
                }}
              >
                3
              </span>
              Front Raise
            </p>
            <div style={{ textAlign: "center" }}>
              <img src={frontRaise} alt="" style={{ width: "200px" }} />
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ display: "inline-block", textAlign: "left" }}>
                <p style={{ color: "grey", fontWeight: "bold" }}>
                  <span style={{ color: "black" }}>Sets:</span> 4
                </p>
                <p style={{ color: "grey", fontWeight: "bold" }}>
                  <span style={{ color: "black" }}>Reps: </span>10, 8, 8, 8
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <p style={{ fontWeight: "bold", textAlign: "center" }}>
              <span
                style={{
                  background: "#656CF1",
                  borderRadius: "50px",
                  display: "inline-flex",
                  width: "30px",
                  height: "30px",
                  color: "white",
                  textAlign: "center",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "18px",
                  fontWeight: "bold",
                  marginRight: "10px",
                }}
              >
                4
              </span>
              Lateral Raise
            </p>
            <div style={{ textAlign: "center" }}>
              <img src={lateralRaise} alt="" style={{ width: "200px" }} />
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ display: "inline-block", textAlign: "left" }}>
                <p style={{ color: "grey", fontWeight: "bold" }}>
                  <span style={{ color: "black" }}>Sets:</span> 4
                </p>
                <p style={{ color: "grey", fontWeight: "bold" }}>
                  <span style={{ color: "black" }}>Reps: </span>12, 10, 10, 10
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <p style={{ fontWeight: "bold", textAlign: "center" }}>
              <span
                style={{
                  background: "#656CF1",
                  borderRadius: "50px",
                  display: "inline-flex",
                  width: "30px",
                  height: "30px",
                  color: "white",
                  textAlign: "center",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "18px",
                  fontWeight: "bold",
                  marginRight: "10px",
                }}
              >
                5
              </span>
              Cable Upright Row
            </p>
            <div style={{ textAlign: "center" }}>
              <img src={cableUprightRow} alt="" style={{ width: "200px" }} />
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ display: "inline-block", textAlign: "left" }}>
                <p style={{ color: "grey", fontWeight: "bold" }}>
                  <span style={{ color: "black" }}>Sets:</span> 4
                </p>
                <p style={{ color: "grey", fontWeight: "bold" }}>
                  <span style={{ color: "black" }}>Reps: </span>12, 8, 8, 8
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <p style={{ fontWeight: "bold", textAlign: "center" }}>
              <span
                style={{
                  background: "#656CF1",
                  borderRadius: "50px",
                  display: "inline-flex",
                  width: "30px",
                  height: "30px",
                  color: "white",
                  textAlign: "center",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "18px",
                  fontWeight: "bold",
                  marginRight: "10px",
                }}
              >
                6
              </span>
              Medicine Ball Russian Twist
            </p>
            <div style={{ textAlign: "center" }}>
              <img
                src={medicineBallRussianTwist}
                alt=""
                style={{ width: "200px" }}
              />
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ display: "inline-block", textAlign: "left" }}>
                <p style={{ color: "grey", fontWeight: "bold" }}>
                  <span style={{ color: "black" }}>Sets:</span> 4
                </p>
                <p style={{ color: "grey", fontWeight: "bold" }}>
                  <span style={{ color: "black" }}>Reps: </span>10, 8, 8, 8
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <p style={{ fontWeight: "bold", textAlign: "center" }}>
              <span
                style={{
                  background: "#656CF1",
                  borderRadius: "50px",
                  display: "inline-flex",
                  width: "30px",
                  height: "30px",
                  color: "white",
                  textAlign: "center",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "18px",
                  fontWeight: "bold",
                  marginRight: "10px",
                }}
              >
                6
              </span>
              Leg Raise
            </p>
            <div style={{ textAlign: "center" }}>
              <img src={legRaise} alt="" style={{ width: "200px" }} />
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ display: "inline-block", textAlign: "left" }}>
                <p style={{ color: "grey", fontWeight: "bold" }}>
                  <span style={{ color: "black" }}>Sets:</span> 4
                </p>
                <p style={{ color: "grey", fontWeight: "bold" }}>
                  <span style={{ color: "black" }}>Reps: </span>12, 10, 10, 10
                </p>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default GetMuscle;
