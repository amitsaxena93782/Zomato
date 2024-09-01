import React from "react";
import AppBar from "../../Components/AppBar.jsx";
import { Box, Typography } from "@mui/material";
import photo from "../../assets/Home.png";
import Icon from "./Icon.jsx";
import Grid from "@mui/material/Grid";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

const Top = () => {
  const top100Films = [
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
    { title: "The Godfather: Part II", year: 1974 },
    { title: "The Dark Knight", year: 2008 },
    { title: "12 Angry Men", year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: "Pulp Fiction", year: 1994 },
  ];
  return (
    <Box
      minHeight={400}
      height="100%"
      sx={{
        backgroundImage: `linear-gradient(180deg, #9D0E0E00 0%, #4F0707 100%), url("${photo}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <AppBar />
      <Icon />
      <Typography
        sx={{
          textAlign: "center",
          color: "#FFFFFF",
          font: "normal normal 600 36px/55px Poppins",
        }}
      >
        Find the best restaurants, cafés, and bars
      </Typography>
      <Grid container spacing={2} maxWidth="600px" width="100%" margin="0 auto">
        <Grid item xs={12} md={4}>
          <Autocomplete
            freeSolo
            id="select-location"
            disableClearable
            options={top100Films.map((option) => option.title)}
            sx={{ background: "#FFFFFF", borderRadius: "5px" }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Choose location"
                slotProps={{
                  input: {
                    ...params.InputProps,
                    type: "search",
                  },
                }}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Autocomplete
            freeSolo
            id="free-solo-2-demo"
            disableClearable
            options={top100Films.map((option) => option.title)}
            sx={{ background: "#FFFFFF", borderRadius: "5px" }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Search for restaurants"
                slotProps={{
                  input: {
                    ...params.InputProps,
                    type: "search",
                  },
                }}
              />
            )}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Top;
