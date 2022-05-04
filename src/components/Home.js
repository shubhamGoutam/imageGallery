import React from "react";
import { Grid, Container, Toolbar } from "@mui/material";
import Footer from "./Footer";
import { useGetAllDataQuery } from "../feture/postApi";
import CardsApp from "./CardsApp";
import SwiperCarusel from "./SwiperCaru";
const Home = () => {
  const { data, isLoading, error } = useGetAllDataQuery();

  return (
    <>
      <SwiperCarusel />

      {isLoading ? (
        <h3>isLoading</h3>
      ) : error ? (
        <h3>Error in Api</h3>
      ) : (
        <>
          <Container maxWidth="xxl">
            <Grid container spacing={2}>
              {data.map((items, index) => {
                return (
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <CardsApp items={items} />
                  </Grid>
                );
              })}
            </Grid>
          </Container>
          <Footer />
        </>
      )}
    </>
  );
};

export default Home;
