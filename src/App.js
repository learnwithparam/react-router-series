import React from 'react';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

const IndexPage = () => {
  return (
    <h3>Home Page</h3>
  );
};

const AboutPage = () => {
  return (
    <h3>About Page</h3>
  );
};

const App = () => {
  return (
    <section className="App">
      <Router>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Route exact path="/" component={IndexPage} />
        <Route exact path="/about" component={AboutPage} />
      </Router>
      <a href="/about">about with browser reload</a>
    </section>
  );
};

export default App;