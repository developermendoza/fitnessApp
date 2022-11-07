import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Container } from "@mui/material";
import Button from "@mui/material/Button";

const WorkoutDietNav = () => {
  const location = useLocation();
  console.log("location : ", location.pathname);
  return (
    <div>
      <Container style={{ textAlign: "center" }}>
        <Link to="/">
          <Button
            style={{
              background: location.pathname === "/" ? "#656CF1" : "#C6C7C6",
              color: "white",
              fontWeight: "bold",
              minWidth: "150px",
              margin: "0 10px",
            }}
          >
            Workout
          </Button>
        </Link>
        <Link to="/diet">
          <Button
            style={{
              background: location.pathname === "/diet" ? "#656CF1" : "#C6C7C6",
              color: "white",
              fontWeight: "bold",
              minWidth: "150px",
              margin: "0 10px",
            }}
          >
            Diet
          </Button>
        </Link>
        <div
          style={{
            border: ".5px solid #979797",
            width: "100%",
            margin: "40px 0",
          }}
        ></div>
      </Container>
    </div>
  );
};

export default WorkoutDietNav;
