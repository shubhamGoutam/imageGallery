import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography, Container, Stack, Divider } from "@mui/material";
import "./styles.css";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function AutoGrid() {
  return (
    <Box
      className="footers"
      sx={{ flexGrow: 1, width: "100%", height: "auto" }}
      mt={4}
    >
      <Grid container spacing={1}>
        <Grid item xs={12} sm mt={3}>
          <Typography variant="h6" color="white" textAlign="center">
            Resourcess
          </Typography>
          <Typography
            variant="p"
            component="div"
            color="white"
            textAlign="center"
          >
            F.A.Q
          </Typography>
          <Typography
            variant="p"
            component="div"
            color="white"
            textAlign="center"
          >
            Help Center
          </Typography>
          <Typography
            variant="p"
            component="div"
            color="white"
            textAlign="center"
          >
            Community
          </Typography>
          <Typography
            variant="p"
            component="div"
            color="white"
            textAlign="center"
          >
            Status
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} mt={3}>
          <Typography variant="h6" color="white" textAlign="center">
            Product
          </Typography>
          <Typography
            variant="p"
            component="div"
            color="white"
            textAlign="center"
          >
            Brave Release
          </Typography>
          <Typography
            variant="p"
            component="div"
            color="white"
            textAlign="center"
          >
            Brave Beta
          </Typography>
          <Typography
            variant="p"
            component="div"
            color="white"
            textAlign="center"
          >
            Brave Nightly
          </Typography>
          <Typography
            variant="p"
            component="div"
            color="white"
            textAlign="center"
          >
            Learn
          </Typography>
        </Grid>
        <Grid item xs sm mt={3}>
          <Typography variant="h6" color="white" textAlign="center">
            Social Media
          </Typography>
          <Typography
            variant="p"
            component="div"
            color="white"
            textAlign="center"
          >
            Reddit
          </Typography>
          <Typography
            variant="p"
            component="div"
            color="white"
            textAlign="center"
          >
            Twitter
          </Typography>
          <Typography
            variant="p"
            component="div"
            color="white"
            textAlign="center"
          >
            Facebook
          </Typography>
          <Typography
            variant="p"
            component="div"
            color="white"
            textAlign="center"
          >
            YouTube
          </Typography>
        </Grid>
      </Grid>

      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
        mt={5}
        p={5}
        color="white"
      >
        <p>
          {" "}
          Copyright@2022.Gmail.com |All Right Removed |Terms And Conditions| Our
          Servies |Privacy{" "}
        </p>
      </Stack>
    </Box>
  );
}
