import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

const CategorySelect = (props) => {
  const { categories, handleInput } = props;
  return (
    <div>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
            Выберите категорию товара
          </InputLabel>
          <Select
            id="demo-simple-select"
            labelId="demo-simple-select-label"
            label="Category"
            name="category"
            onChange={handleInput}
          >
            {categories.map((elem) => (
              <MenuItem key={elem.id} value={elem.name}>
                {elem.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </div>
  );
};

export default CategorySelect;
