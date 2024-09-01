import React from "react";
import { Box } from "@mui/material";

const Icon = () => {
  return (
    <Box
      width={130}
      height={130}
      sx={{
        background: "#FFFFFF 0% 0% no-repeat padding-box",
        border: "1px solid #707070",
        opacity: 1,
        borderRadius: "50%",
      }}
      margin="5px auto"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        width={68}
        height={99}
        textAlign="center"
        sx={{ font: "normal normal 600 75px/106px Poppins" }}
        letterSpacing={0}
        color="#EB2929"
      >
        e!
      </Box>
    </Box>
  );
};

export default Icon;
