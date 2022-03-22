import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Attractions from "./pages/Attractions";
import About from "./pages/About";
import Layout from "./components/layout/Layout"

export default function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/attractions">
            <Attractions />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}
