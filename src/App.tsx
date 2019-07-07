import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.scss';
import Screen1 from './screen/screen1/screen1';
import Home from './screen/home/home';
import Screen2 from './screen/screen2/screen2';

export default class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <header>
            <h2>Header</h2>
          </header>

          <section>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/screen1">Screen1</Link>
                </li>
                <li>
                  <Link to="/screen2">Screen2</Link>
                </li>
              </ul>
            </nav>

            <article>
              <Route exact path="/" component={Home} />
              <Route path="/screen1" component={Screen1} />
              <Route path="/screen2" component={Screen2} />
            </article>
          </section>

          <footer>
            <h2>Footer</h2>
          </footer>
        </React.Fragment>
      </Router>
    );
  }
}
