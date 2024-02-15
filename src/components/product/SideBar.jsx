import React, { useEffect } from "react";
import { useProducts } from "../context/ProductContextProvider";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

const SideBar = () => {
  const { categories, getCategories, fetchByParams } = useProducts();
  useEffect(() => {
    getCategories();
  }, []);
  return (
    <div>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Категории</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
          onChange={(e) => fetchByParams("category", e.target.value)}
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
    </div>
  );
};

export default SideBar;
