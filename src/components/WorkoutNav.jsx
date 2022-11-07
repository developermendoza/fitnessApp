import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Link } from "react-router-dom";

const WorkoutNav = ({ handleChange, selectedValue }) => {
  return (
    <div style={{ textAlign: "center", marginBottom: "40px" }}>
      <label htmlFor="muscle" style={{ cursor: "pointer" }}>
        <Radio
          id="muscle"
          checked={selectedValue === "get muscle"}
          onChange={handleChange}
          value="get muscle"
          name="radio-buttons"
          inputProps={{ "aria-label": "A" }}
        />
        Get Muscle
      </label>
      <label htmlFor="ripped" style={{ cursor: "pointer" }}>
        <Radio
          id="ripped"
          checked={selectedValue === "get ripped"}
          onChange={handleChange}
          value="get ripped"
          name="radio-buttons"
          inputProps={{ "aria-label": "B" }}
        />
        Get Ripped
      </label>
    </div>
  );
};

export default WorkoutNav;
