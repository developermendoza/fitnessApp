import React from "react";
import { Container } from "@mui/material";
import WorkoutNav from "../components/WorkoutNav";
import GetMuscle from "../components/GetMuscle";
import GetRipped from "../components/GetRipped";

const Workout = () => {
  const [selectedValue, setSelectedValue] = React.useState("get muscle");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <div>
      <Container>
        <WorkoutNav handleChange={handleChange} selectedValue={selectedValue} />
      </Container>
      {selectedValue === "get muscle" && <GetMuscle />}
      {selectedValue === "get ripped" && <GetRipped />}
    </div>
  );
};

export default Workout;
