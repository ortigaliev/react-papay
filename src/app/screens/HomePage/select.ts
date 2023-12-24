
import { createSelector } from "reselect";
import { HomePage } from ".";
import { AppRootState } from "../../../types/screen";

const selectHomePage = (state: AppRootState) => state.homePage;

export const retrieveTopRestaurants = createSelector(
  selectHomePage,
  (HomePage) => HomePage.topRestaurants
);


export const retrieveBestRestaurants = createSelector(
  selectHomePage,
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

// The use of createSelector from reselect means that these selectors are memoized.
// Memoization is an optimization technique that ensures the selector only recomputes when the relevant part of the state changes
// These selectors would be used in React components, typically in conjunction with the useSelector hook from react-redux,
// to access the specific parts of the Redux state