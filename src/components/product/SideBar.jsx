import React, { useEffect } from "react";
import { useProducts } from "../context/ProductContextProvider";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Paper,
  Radio,
  RadioGroup,
} from "@mui/material";

const SideBar = () => {
  const { categories, getCategories, fetchByParams } = useProducts();
  useEffect(() => {
    getCategories();
  }, []);
  return (
    <Paper sx={{ width: "300px", marginBottom: "60px" }}>
      <FormControl>
        <FormLabel
          sx={{ marginLeft: "50px", marginTop: "20px" }}
          id="demo-radio-buttons-group-label"
        >
          Категории
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
          onChange={(e) => fetchByParams("category", e.target.value)}
          sx={{ marginLeft: "50px", marginTop: "20px", marginBottom: "50px" }}
        >
          <FormControlLabel control={<Radio />} value={"all"} label={"ALL"} />
          {categories.map((elem) => (
            <FormControlLabel
              key={elem.id}
              value={elem.name}
              label={elem.name}
              control={<Radio />}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </Paper>
  );
};

export default SideBar;
