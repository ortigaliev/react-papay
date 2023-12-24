import { BoArticle } from './boArticle';
import { Product } from './product';
import { Restaurants } from './user';

export interface AppRootState {
  homePage: HomePageState;
}

export interface HomePageState{
  topRestaurants: Restaurants[];
  bestRestaurants: Restaurants[];
  trendProducts: Product[];
  bestBoArticles: BoArticle[];
  trendBoArticles: BoArticle[];
  newsBoArticles: BoArticle[];
}