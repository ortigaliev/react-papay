import React, { useEffect, useState } from "react"; // imports the React library, which is necessary to use React components and JSX.
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "../css/App.css";
import "../css/navbar.css";
import "../css/footer.css";

import { RestaurantPage } from "./screens/RestaurantPage";
import { CommunityPage } from "./screens/CommunityPage";
import { OrdersPage } from "./screens/OrdersPage";
import { MemberPage } from "./screens/MemberPage";
import { HelpPage } from "./screens/HelpPage";
import { LoginPage } from "./screens/LoginPage";
import { HomePage } from "./screens/HomePage";
import { NavbarHome } from "./components/header";
import { NavbarRestaurant } from "./components/header/restaurant";
import { NavbarOthers } from "./components/header/others";
import { Footer } from "./components/footer";

// import { SettingsSharp } from "@mui/icons-material";
import { Member } from "../types/user";
import { serverApi } from "../lib/config";
import {
  sweetFailureProvider,
  sweetTopSmallSuccessAlert,
} from "../lib/sweetAlert";
import { Definer } from "../lib/Definer";
import MemberApiService from "../apiServer/memberApiServer";
// import "../app/apiServer/verify";

function App() {
  // React functional component
  const [path, setPath] = useState();
  // const location = useLocation();
  const main_path = window.location.pathname;
  return (
    <Router>
      {main_path === "/" ? (
        <NavbarHome setPath={setPath} />
      ) : main_path.includes("/restaurant") ? (
        <NavbarRestaurant setPath={setPath} />
      ) : (
        <NavbarOthers setPath={setPath} />
      )}
      <Switch>
        <Route path="/restaurant">
          <RestaurantPage />
        </Route>
        <Route path="/community">
          <CommunityPage />
        </Route>
        <Route path="/orders">
          <OrdersPage />
        </Route>
        <Route path="/member-page">
          <MemberPage />
        </Route>
        <Route path="/help">
          <HelpPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/">
          <HomePage />
          {/* <Car /> */}
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}
export default App;