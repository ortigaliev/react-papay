import React, { useEffect } from "react";
import { Container } from "@mui/material";
import { Statistics } from "./statistics";
import { TopRestaurants } from "./topRestaurants";
import { BestRestaurants } from "./bestRestaurants";
import { BestDishes } from "./bestDishes";
import { Advertisements } from "./advertisements";
import { Events } from "./events";
import { Recommendations } from "./recommendation";
import "../../../css/home.css";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { setTopRestaurants } from "./slice";
import { retrieveTopRestaurants } from "./selector";
import { Restaurant } from "../../../types/user";
import RestaurantApiServer from "../../../apiServices/restaurantApiServer";

const actionDispatch = (dispatch: Dispatch) => ({
  setTopRestaurants: (data: Restaurant[]) => dispatch(setTopRestaurants(data)),
});
//** Redux Selector */
const topRestaurantsRetriever = createSelector(
  retrieveTopRestaurants,
  (topRestaurants) => ({
    topRestaurants,
  })
);

// REDUX SELECTOR
const topRestaurantRetriever = createSelector(
  retrieveTopRestaurants,
  (topRestaurants) => ({
    topRestaurants,
  })
  );


  export function HomePage() {
    // selector: store => data

    // Initialization
    const { setTopRestaurants } = actionDispatch(useDispatch());
    const { topRestaurants } = useSelector(topRestaurantsRetriever);
    console.log("topRestaurants:::", topRestaurants);
    useEffect(() => {
      // backend data request => data
      // slice: data => store
      const restaurantService = new RestaurantApiServer();
      restaurantService
        .getTopRestaurants()
        .then((data) => {
          setTopRestaurants(data);
        })
        .catch((err) => console.log(err));
    }, []);
      return (
        <div className="homepage">
        <Statistics />
        <TopRestaurants />
        <BestRestaurants />
        <BestDishes />
        <Advertisements />
        <Events />
        <Recommendations />
        </div>
        );
}