import React, { useContext, Suspense,lazy } from "react";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Logo } from "./components/Logo";
import { Router, Redirect } from "@reach/router";
import { NavBar } from "./components/NavBar";

import { Context } from "./Context";

const Favs = lazy(() => import("./pages/Favs")),
      User = lazy(() => import("./pages/User")),
      Home = lazy(() => import("./pages/Home")),
      Detail = lazy(() => import("./pages/Detail")),
      NotFound = lazy(() => import("./pages/NotFound")),
      NotRegisteredUser = lazy(() => import("./pages/NotRegisteredUser"));

export const App = () => {
  const { isAuth } = useContext(Context);
  return (
    <Suspense fallback={<div />}>
      <GlobalStyles />
      <Logo />
      <Router>
        <NotFound default />
        <Home path="/" />
        <Home path="/pet/:categoryId" />
        <Detail path="/detail/:detailId" />
        {!isAuth && <NotRegisteredUser path="/login" />}
        {!isAuth && <Redirect noThrow from="/favs" to="/login" />}
        {!isAuth && <Redirect noThrow from="/user" to="/login" />}
        {isAuth && <Redirect noThrow from="/login" to="/" />}
        <Favs path="/favs" />
        <User path="/user" />
      </Router>

      <NavBar />
    </Suspense>
  );
};
