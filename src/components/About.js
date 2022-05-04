import React from "react";
import { useParams } from "react-router-dom";
import { useGetAllDataByIdQuery } from "../feture/postApi";
import { Container, Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Commemts from "./Commemts";
const About = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetAllDataByIdQuery(id);
  console.log(data);
  return (
    <>
      {isLoading ? (
        <h2>isLoading</h2>
      ) : error ? (
        <h3>Error in Api</h3>
      ) : (
        <>
          <Container>
            <Card
              sx={{
                maxWidth: "100%",
                marginTop: "20px",
                backgroundColor: "#2c2c54",
              }}
            >
              <CardMedia
                component="img"
                alt={data.name}
                height="540"
                width="100%"
                image={data.image}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  color="white"
                  component="div"
                  justifyContent="spaceBetween"
                >
                  <span style={{ color: "rgb(245, 194, 43)" }}> Name </span>{" "}
                  {data.name}
                </Typography>
                <Typography
                  gutterBottom
                  variant="h5"
                  color="white"
                  component="div"
                >
                  <span style={{ color: "rgb(245, 194, 43)" }}> Rating </span>{" "}
                  {data.ratings}
                </Typography>
                <CardActions>
                  <Button size="small" variant="contained">
                    Share
                  </Button>
                  <Button size="small" variant="contained">
                    Learn More
                  </Button>
                </CardActions>
                <Typography variant="body2" color="white" fontSize="23px">
                  <span style={{ color: "rgb(245, 194, 43)" }}> About Us </span>{" "}
                  <br />
                  {data.desc}
                </Typography>
              </CardContent>
              <Commemts data={data} />
              <Typography p={5} variant="body2" color="white" fontSize="23px">
                Comments Here
              </Typography>
            </Card>
          </Container>
        </>
      )}
    </>
  );
};

export default About;
