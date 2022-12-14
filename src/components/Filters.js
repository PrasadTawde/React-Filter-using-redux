import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useSelector, useDispatch } from "react-redux";
import { getFilterSlice, setSeletectFilter } from "../slice/filterSlice";

function Filter() {
  const [currentFilter, setcurrentFilter] = React.useState("");
  const dispatch = useDispatch();
  const { filters } = useSelector(getFilterSlice);
  const handleChange = (event) => {
    setcurrentFilter(event.target.value);
    dispatch(setSeletectFilter(event.target.value));
  };

  return (
    <>
      <div className="wrapper-div">
        <div className="select-wrap">
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Filters</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={currentFilter}
                label="currentFilter"
                onChange={handleChange}
              >
                <MenuItem value="">&nbsp;</MenuItem>
                {filters.map((val, index) => (
                  <MenuItem value={val} key={index}>
                    {val}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </div>
      </div>
    </>
  );
}

export default Filter;
