import { createSelector } from "reselect";
import { HomePage } from ".";
import { AppRootState } from "../../../types/screen";

// Base Selector i.e A basic selector that takes the entire application state
const selectHomePage = (state: AppRootState) => state.homePage;

export const retrieveTopRestaurants = createSelector(
  selectHomePage,
  (HomePage) => HomePage.topRestaurants
);

//  Gets the topRestaurants array from the homePage state.
export const retrieveBestRestaurants = createSelector(
  selectHomePage,
  //  Each selector computes and retrieves a specific part of the homePage state.
  (HomePage) => HomePage.bestRestaurants
  // Gets the bestRestaurants array.
);
export const retrieveTrendProducts = createSelector(
  selectHomePage,
  (HomePage) => HomePage.trendProducts
);
export const retrieveBestBoArticles = createSelector(
  selectHomePage,
  (HomePage) => HomePage.bestBoArticles
);
export const retrieveTrendBoArticles = createSelector(
  selectHomePage,
  (HomePage) => HomePage.trendBoArticles
);
export const retrieveNewsBoArticles = createSelector(
  selectHomePage,
  (HomePage) => HomePage.newsBoArticles
);