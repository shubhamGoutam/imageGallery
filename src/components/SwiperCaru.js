import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { useGetAllDataQuery } from "../feture/postApi";
import {
  Grid,
  Card,
  CardMedia,
  CardActionArea,
  Container,
  Box,
  Typography,
  Button,
} from "@mui/material";
import "./styles.css";
export default function App() {
  const { data, isLoading, error } = useGetAllDataQuery();
  console.log(data);
  return (
    <>
      {isLoading ? (
        <h3></h3>
      ) : error ? (
        <h3>Error</h3>
      ) : (
        <Swiper
          style={{ width: "100%", height: "70vh", marginTop: "3px" }}
          spaceBetween={2}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          <Grid container spacing={4}>
            {data.map((items, index) => {
              return (
                <Container key={index}>
                  <Grid item xs={12}>
                    <SwiperSlide mt={5}>
                      <Container maxWidth="xl">
                        <Card style={{ width: "100%" }}>
                          <CardActionArea>
                            <Box className="container">
                              <CardMedia
                                className="img"
                                component="img"
                                height="440px"
                                width="100%"
                                image={items.image}
                                alt="green iguana"
                              />
                              <Box className="paraTitle">
                                <Typography variant="h4" className="spanPara">
                                  
                                  In publishing and graphic design, Lorem ipsum
                                </Typography>
                                <Box className="btn">
                                  <Button className="btnA" variant="contained">
                                    Share
                                  </Button>
                                  <Button className="btnA" variant="contained">
                                    Lern More
                                  </Button>
                                </Box>
                              </Box>
                            </Box>
                          </CardActionArea>
                        </Card>
                      </Container>
                    </SwiperSlide>
                  </Grid>
                </Container>
              );
            })}
          </Grid>
        </Swiper>
      )}
    </>
  );
}
