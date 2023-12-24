import { Favorite } from "@mui/icons-material";
import { AspectRatio,Card, CardOverflow, CssVarsProvider,  Typography, Link, IconButton, } from "@mui/joy";
import { Box, Container, Stack, Button } from "@mui/material";
import React from "react";
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import CallIcon from '@mui/icons-material/Call';
import VisibilityIcon from '@mui/icons-material/Visibility';

export function BestRestaurants () {
  return (
    <div className="best_restaurant_frame">
      <img src="icons/best_restaurant-icon.svg" alt="best" style={{ position: "absolute", left: "6%", }} />
      <Container sx={ {paddingTop: "133px"}}>
        <Stack flexDirection={"column"} alignItems={"center"}>
          <Box className="category_title">Best Restaurants</Box>
          <Stack sx={{mt: "43px"}} flexDirection={"row"} >
            <CssVarsProvider>
              {/* BEST RESTAURANT CARD 1 */}
              <Card variant="outlined" sx={{ minHeight: 483, minWidth: 320, mr: "35px "}}>
                <CardOverflow>
                  <AspectRatio ratio="1">
                    <img className="best_restaurant-card_img" src="homeImg/best_resto.jpg" alt="bestrest" />
                  </AspectRatio>
                  <IconButton
                  aria-label="Like minamal photography"
                  size="md"
                  variant="solid"
                  color="neutral"
                  sx={{
                    position: "absolute",
                    zIndex: 2,
                    borderRadius: "50%",
                    right: "1rem",
                    bottom: 0,
                    transform: "translateY(50%)",
                    color: "rgba(0, 0, 0, .4)",
                  }}>
                    <Favorite style={{ color: "white"}}></Favorite>
                  </IconButton>
                </CardOverflow>
                <Typography sx={{ fontSize: "md", mt: 2 }}>
                  Uzum
                </Typography>
                <Typography sx={{ mt: 0.5, mb: 2 }}>
                  <Link href="" startDecorator={<LocationOnRoundedIcon/>} textColor="neutral.700" >
                  Tashkent, Yunus Obod 4-1
                  </Link>
                </Typography>
                <Typography sx={{ mt: 0.5, mb: 2 }}>
                  <Link href="" startDecorator={<CallIcon/>} textColor="neutral.700" >
                  +99890 7314578
                  </Link>
                </Typography>
                <CardOverflow variant="soft" sx={{
                  display: "flex",
                  gap: 1.5,
                  py: 1.5,
                  px: "var(--Card-padding)",
                  bgcolor: "background.level1",
                }} >
                  <Stack sx={{ flexDirection: "row" }}>
                  <Typography sx={{
                    fontWeight: "md",
                    color: "text.secondary",
                    alignItems: "center",
                    display: "flex",
                  }}>100{" "}
                    <VisibilityIcon sx={{ fonstSize: 20, marginLeft: "5px"}} ></VisibilityIcon>
                  </Typography>
                  <Box sx={{ width: 2, bgcolor: "divider", mr: "5px", ml: "5px" }}></Box>
                  <Typography sx={{fontWeight: "md",
                color: "text.secondary",
                alignItems: "center",
                display: "flex"}}>
                  <div>500</div>
                  <Favorite sx={{ fontSize: 20, marginLeft: "5px"}}></Favorite>

                  </Typography>
                  </Stack>
                </CardOverflow>

              </Card>

               {/* BEST RESTAURANT CARD 2 */}
               <Card variant="outlined" sx={{ minHeight: 483, minWidth: 320, mr: "35px "}}>
                <CardOverflow>
                  <AspectRatio ratio="1">
                    <img className="best_restaurant-card_img" src="homeImg/best_resto.jpg" alt="bestrest" />
                  </AspectRatio>
                  <IconButton
                  aria-label="Like minamal photography"
                  size="md"
                  variant="solid"
                  color="neutral"
                  sx={{
                    position: "absolute",
                    zIndex: 2,
                    borderRadius: "50%",
                    right: "1rem",
                    bottom: 0,
                    transform: "translateY(50%)",
                    color: "rgba(0, 0, 0, .4)",
                  }}>
                    <Favorite style={{ color: "white"}}></Favorite>
                  </IconButton>
                </CardOverflow>
                <Typography sx={{ fontSize: "md", mt: 2 }}>
                  Uzum
                </Typography>
                <Typography sx={{ mt: 0.5, mb: 2 }}>
                  <Link href="" startDecorator={<LocationOnRoundedIcon/>} textColor="neutral.700" >
                  Tashkent, Yunus Obod 4-1
                  </Link>
                </Typography>
                <Typography sx={{ mt: 0.5, mb: 2 }}>
                  <Link href="" startDecorator={<CallIcon/>} textColor="neutral.700" >
                  +99890 7314578
                  </Link>
                </Typography>
                <CardOverflow variant="soft" sx={{
                  display: "flex",
                  gap: 1.5,
                  py: 1.5,
                  px: "var(--Card-padding)",
                  bgcolor: "background.level1",
                }} >
                  <Stack sx={{ flexDirection: "row" }}>
                  <Typography sx={{
                    fontWeight: "md",
                    color: "text.secondary",
                    alignItems: "center",
                    display: "flex",
                  }}>100{" "}
                    <VisibilityIcon sx={{ fonstSize: 20, marginLeft: "5px"}} ></VisibilityIcon>
                  </Typography>
                  <Box sx={{ width: 2, bgcolor: "divider", mr: "5px", ml: "5px" }}></Box>
                  <Typography sx={{fontWeight: "md",
                color: "text.secondary",
                alignItems: "center",
                display: "flex"}}>
                  <div>500</div>
                  <Favorite sx={{ fontSize: 20, marginLeft: "5px"}}></Favorite>

                  </Typography>
                  </Stack>
                </CardOverflow>

              </Card>

               {/* BEST RESTAURANT CARD 3 */}
               <Card variant="outlined" sx={{ minHeight: 483, minWidth: 320, mr: "35px "}}>
                <CardOverflow>
                  <AspectRatio ratio="1">
                    <img className="best_restaurant-card_img" src="homeImg/best_resto.jpg" alt="bestrest" />
                  </AspectRatio>
                  <IconButton
                  aria-label="Like minamal photography"
                  size="md"
                  variant="solid"
                  color="neutral"
                  sx={{
                    position: "absolute",
                    zIndex: 2,
                    borderRadius: "50%",
                    right: "1rem",
                    bottom: 0,
                    transform: "translateY(50%)",
                    color: "rgba(0, 0, 0, .4)",
                  }}>
                    <Favorite style={{ color: "white"}}></Favorite>
                  </IconButton>
                </CardOverflow>
                <Typography sx={{ fontSize: "md", mt: 2 }}>
                  Uzum
                </Typography>
                <Typography sx={{ mt: 0.5, mb: 2 }}>
                  <Link href="" startDecorator={<LocationOnRoundedIcon/>} textColor="neutral.700" >
                  Tashkent, Yunus Obod 4-1
                  </Link>
                </Typography>
                <Typography sx={{ mt: 0.5, mb: 2 }}>
                  <Link href="" startDecorator={<CallIcon/>} textColor="neutral.700" >
                  +99890 7314578
                  </Link>
                </Typography>
                <CardOverflow variant="soft" sx={{
                  display: "flex",
                  gap: 1.5,
                  py: 1.5,
                  px: "var(--Card-padding)",
                  bgcolor: "background.level1",
                }} >
                  <Stack sx={{ flexDirection: "row" }}>
                  <Typography sx={{
                    fontWeight: "md",
                    color: "text.secondary",
                    alignItems: "center",
                    display: "flex",
                  }}>100{" "}
                    <VisibilityIcon sx={{ fonstSize: 20, marginLeft: "5px"}} ></VisibilityIcon>
                  </Typography>
                  <Box sx={{ width: 2, bgcolor: "divider", mr: "5px", ml: "5px" }}></Box>
                  <Typography sx={{fontWeight: "md",
                color: "text.secondary",
                alignItems: "center",
                display: "flex"}}>
                  <div>500</div>
                  <Favorite sx={{ fontSize: 20, marginLeft: "5px"}}></Favorite>

                  </Typography>
                  </Stack>
                </CardOverflow>

              </Card>

               {/* BEST RESTAURANT CARD 4 */}
               <Card variant="outlined" sx={{ minHeight: 483, minWidth: 320, mr: "35px "}}>
                <CardOverflow>
                  <AspectRatio ratio="1">
                    <img className="best_restaurant-card_img" src="homeImg/best_resto.jpg" alt="bestrest" />
                  </AspectRatio>
                  <IconButton
                  aria-label="Like minamal photography"
                  size="md"
                  variant="solid"
                  color="neutral"
                  sx={{
                    position: "absolute",
                    zIndex: 2,
                    borderRadius: "50%",
                    right: "1rem",
                    bottom: 0,
                    transform: "translateY(50%)",
                    color: "rgba(0, 0, 0, .4)",
                  }}>
                    <Favorite style={{ color: "white"}}></Favorite>
                  </IconButton>
                </CardOverflow>
                <Typography sx={{ fontSize: "md", mt: 2 }}>
                  Uzum
                </Typography>
                <Typography sx={{ mt: 0.5, mb: 2 }}>
                  <Link href="" startDecorator={<LocationOnRoundedIcon/>} textColor="neutral.700" >
                  Tashkent, Yunus Obod 4-1
                  </Link>
                </Typography>
                <Typography sx={{ mt: 0.5, mb: 2 }}>
                  <Link href="" startDecorator={<CallIcon/>} textColor="neutral.700" >
                  +99890 7314578
                  </Link>
                </Typography>
                <CardOverflow variant="soft" sx={{
                  display: "flex",
                  gap: 1.5,
                  py: 1.5,
                  px: "var(--Card-padding)",
                  bgcolor: "background.level1",
                }} >
                  <Stack sx={{ flexDirection: "row" }}>
                  <Typography sx={{
                    fontWeight: "md",
                    color: "text.secondary",
                    alignItems: "center",
                    display: "flex",
                  }}>100{" "}
                    <VisibilityIcon sx={{ fonstSize: 20, marginLeft: "5px"}} ></VisibilityIcon>
                  </Typography>
                  <Box sx={{ width: 2, bgcolor: "divider", mr: "5px", ml: "5px" }}></Box>
                  <Typography sx={{fontWeight: "md",
                color: "text.secondary",
                alignItems: "center",
                display: "flex"}}>
                  <div>500</div>
                  <Favorite sx={{ fontSize: 20, marginLeft: "5px"}}></Favorite>

                  </Typography>
                  </Stack>
                </CardOverflow>

              </Card>


            </CssVarsProvider>
          </Stack>

          {/* BEST RESTAURANT BUTTON */}
          <Stack
            flexDirection={"row"}
            justifyContent={"flex-end"}
            style={{ width: "100%", marginTop: "16px"}}
            >
              <Button style={{ background: "#1976d2", color: "#fff"}}>See All</Button>


          </Stack>
        </Stack>
      </Container>
    </div>
    )
  }