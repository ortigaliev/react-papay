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

export function HomePage () {

  //selector: store => data
  useEffect( () => {
    //backend data request => data


    //slice: data => store
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