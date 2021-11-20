import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Binance, Bitstamp, Test, BinanceWazirx } from "./routes";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/bitstamp">Bitstamp</Link>
            </li>
            <li>
              <Link to="/binance">Binance</Link>
            </li>
            <li>
              <Link to="/test">Test</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/Bitstamp">
            <Bitstamp />
          </Route>
          <Route path="/binance">
            <Binance />
          </Route>
          <Route exact path="/">
            <BinanceWazirx />
          </Route>
          <Route path="/test">
            <Test />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
