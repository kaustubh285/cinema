import React from "react";
import "./App.css";
import Searcher from "./Searcher";
import SeriesSearcher from "./SeriesSearcher";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className='container'>
      <p className='title text-center text-dark pb-5'>Welcome To Cinema!</p>
      <Router>
        <Switch>
          <Route path='/' exact component={Searcher} />
          <Route path='/tv' exact component={SeriesSearcher} />
          <Route path='/' component={Nourl} />
        </Switch>
      </Router>
    </div>
  );
}

const Nourl = () => (
  <div>
    <h2>Please enter a valid URL.</h2>
    <h3>
      You can check out <a href='/'>Movies</a> and <a href='/tv'>Series</a>{" "}
      sections of the website.
    </h3>
  </div>
);

export default App;
