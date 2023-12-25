import { Container } from '@mui/material';
import React from 'react';
import { Statistics } from './statistics';
import { TopRestaurants } from './topRestaurants';
import { BestRestaurants } from './bestRestaurants';
import { BestDishes } from './bestDishes';
import { Advertisements } from './advertisements';
import { Events } from './events';
import { Recommendations } from './recommendation';
import '../../../css/home.css';
import { useEffect } from 'react';

//Redux
import {useDispatch, useSelector} from "react-redux";
import {Dispatch} from "@reduxjs/toolkit";
import {createSelector} from "reselect";
import { retrieveTopRestaurants } from "../../screens/HomePage/selector";
import { Restaurant } from '../../../types/user';
import { setTopRestaurants } from './slice';

/* REDUX SLICE */
const actionDispatch = (dispach: Dispatch) => ({
  setTopRestaurants: (data: Restaurant[]) => dispach(setTopRestaurants(data)),
});

/* REDUX SELECTOR */
const topRestaurantsRetriever = createSelector(
  retrieveTopRestaurants,
  (topRestaurants) => ({
    topRestaurants,
  })
  );

  export function HomePage () {
    /* Initialization */
    const {setTopRestaurants} = actionDispatch(useDispatch());
    const {topRestaurants} = useSelector(topRestaurantsRetriever);
    const dispatch = useDispatch();

    console.log("topRestaurants:::", topRestaurants);


    useEffect(() => {

      setTopRestaurants([]);
      }, []);


      return (
        <div className='homepage'>
        <Statistics/>
        <TopRestaurants/>
        <BestRestaurants/>
        <BestDishes/>
        <Advertisements/>
        <Events/>
        <Recommendations/>


        </div>
        )
      };

      