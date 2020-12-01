import React from "react";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";

import Article from "./pages/Article";
function App() {
  return (
    <div className="App">
      <Router >
        <Route path="/" component={Home} exact />
        <Route path="/10" component={Article} />
        <Route path="/search" component={Search} />
      </Router>
    </div>
  );
}

export default App;
