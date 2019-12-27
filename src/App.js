import React from 'react'
import './App.css'
import { Switch, Route } from "react-router-dom"

import HomePage from "./pages/HomePage/HomePage"
import ShopPage from "./pages/ShopPage/ShopPage"

//overview
    // This component is the main component that is being exported on to the web browser, in index.js
    // This component uses React Router to set up the routes.
    // "/" renders the main HomePage component, where all the categories live.
    // "/shop" renders the ShopPage component that display what's available to purchase.

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;