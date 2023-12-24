
import React, {useState} from "react";
import { Container, Stack, Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Marginer from "../../components/marginer"
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";
import { Favorite, FavoriteBorder  } from "@mui/icons-material";
import Checkbox from "@mui/material/Checkbox"


const chosen_list = Array.from(Array(3).keys());

export function ChosenDish() {
  const label = { inputProps: {"aria-label": "Checkbox demo"}};
    return (
      <div className="chosen_dish_page">
        <Container className="dish_container">
          <Stack className="chosen_dish_slider">

            {/* MAIN SWIPER */}
            <Swiper
            className="dish_swiper"
            loop={true}
            spaceBetween={10}
              navigation={true}
              modules={[FreeMode, Navigation, Thumbs ]}>

            {chosen_list.map((ele) => {
              const image_path = `/others/sandwich.jpg`;
              return (
                <SwiperSlide>
                  <img style={{ width: "100%", height: "100%"}} src={image_path} alt="chosenResPicture" />
                </SwiperSlide>
              );
            })}
            </Swiper>


            {/* SMALL SWIPER*/}
            <Swiper
            // onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={50}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
            style={{ width: "450px", height: "107px", marginTop: "20px" }}>
             {chosen_list.map((ele) => {
              const image_path = `/others/sandwich1.jpg`;
              return (
                <SwiperSlide>
                  <img style={{ borderRadius: "15px", height: "107px",
                    width: "160px"}} src={image_path} alt="smallSwiper" />
                </SwiperSlide>
              );
            })}
            </Swiper>


          </Stack>

          <Stack className={"chosen_dish_info_container"}>
            <Box className={"chosen_dish_info_box"}>
              <strong className={"dish_tex"}>Sweet Sandwitch</strong>
              <span className={"resto_name"}>Uzum</span>
              <Box className="rating_box" >
                <Rating name="half-rating" defaultValue={3.5} precision={0.5} />
                <div className={"evaluation_box"}>
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    marginRight: "20px",
                }} >
                  <Checkbox
                  {...label}
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite style={{ color: "red"}}/>}
                  checked={true}
                  />
                  <span>98</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center"}}>
                    <RemoveRedEyeIcon sx={{mr: "10px"}} />
                    <span>1000</span>
                  </div>

                </div>
              </Box>
              <p className={"dish_desc_info"}>Very tasty sandwitch</p>
              <Marginer
              direction="horizontal"
              height="1"
              width="100%"
              bg="#000" />
              <div className={"dish_price_box"}>
                <span>Price:</span>
                <span>$11</span>
              </div>
              <div className={"button_box"}>
                <Button variant="contained">Add to basket</Button>
              </div>

            </Box>
          </Stack>

        </Container>
      </div>

    );
  }
