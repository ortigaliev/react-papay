//Create objectni chaqirib olamiz
// redux js ni ichidan oladi
import { createSlice } from "@reduxjs/toolkit";
import { HomePageState } from "../../../types/screen";


//initial state home pagestate orqali qurulsin degan
const initialState: HomePageState = {
  topRestaurants: [],
  bestRestaurants: [],
  trendProducts: [],
  bestBoArticles: [],
  trendBoArticles: [],
  newsBoArticles: [],
};

// CreateSlice Function

const HomePageSlice = createSlice({
  name: "homePage",
  initialState,
  reducers: {
    // Ma'lumotlarni default
    setTopRestaurants: (state, action) => {
      state.topRestaurants = action.payload;//initil state olyabd
    },
    setBestRestaurants: (state, action) => {
      state.bestRestaurants = action.payload;
    },
    setTrendProducts: (state, action) => {
      state.trendProducts = action.payload;
    },
    setBestBoArticles: (state, action) => {
      state.bestBoArticles = action.payload;
    },
    setTrendBoArticles: (state, action) => {
      state.trendBoArticles = action.payload;
    },
    setNewsBoArticles: (state, action) => {
      state.newsBoArticles = action.payload;
    },
  },
});
// exported to be used in components
// The actions created by the slice are exported.
//These actions can be dispatched to update the state in the store.
export const {
  setTopRestaurants,
  setBestRestaurants,
  setTrendProducts,
  setBestBoArticles,
  setTrendBoArticles,
  setNewsBoArticles,
} = HomePageSlice.actions; //action createrlar ni yaratib oltabmiz.

const HomePageReducer = HomePageSlice.reducer;
export default HomePageReducer;
