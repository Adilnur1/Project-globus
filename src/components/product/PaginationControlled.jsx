import { Pagination, Stack, Typography } from "@mui/material";
import React from "react";

const PaginationControlled = ({ count, page, handleChange }) => {
  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "50px",
      }}
      spacing={2}
    >
      <Typography>Page: {page}</Typography>
      <Pagination
        sx={{ bgcolor: "#fbf8ec" }}
        count={count}
        onChange={handleChange}
      />
    </Stack>
  );
};

export default PaginationControlled;
