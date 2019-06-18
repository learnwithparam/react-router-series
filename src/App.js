import React from 'react';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

const users = [
  {
    name: `Param`,
  },
  {
    name: `Vennila`,
  },
  {
    name: `Afrin`,
  },
];

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

const UsersPage = () => {
  return (
    <>
      {
        users.map((user, index) => (
          <h5 key={index}>
            <Link to={`/user/${index + 1}`}>{user.name}'s Page</Link>
          </h5>
        ))
      }
    </>
  );
};

const UserPage = ({ match, location }) => {
  const { params: { userId } } = match;
  
  return (
    <>
      <p>
        <strong>User ID: </strong>
        {userId}
      </p>
      <p>
        <strong>User Name: </strong> 
        {users[userId - 1].name}
      </p>
    </>
  );
};

const SearchPage = ({ match, location }) => {
  return (
    <p>
      <strong>Query Params: </strong>
      {
        location.search
      }
    </p>
  );
}

const NoMatchPage = () => {
  return (
    <h3>404 - Not found</h3>
  );
};

const PropsPage = ({title}) => {
  return (
    <h3>{title}</h3>
  );
};

const App = () => {
  return (
    <section className="App">
      <Router>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/users">Users</Link>
        <Link to="/search?q=react">Search</Link>
        <Link to="/404-not-found">404</Link>
        <Link to="/props-through-component">Props through component</Link>
        <Link to="/props-through-render">Props through render</Link>
        <Switch>
          <Route exact path="/" component={IndexPage} />
          <Route exact path="/users" component={UsersPage} />
          <Route exact path="/user/:userId" component={UserPage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/search" component={SearchPage} />
          <Route exact path="/props-through-component" component={() => <PropsPage title={`Props through component`} />} />
          <Route exact path="/props-through-render" render={(props) => <PropsPage {...props} title={`Props through render`} />} />
          <Route component={NoMatchPage} />
        </Switch>
      </Router>
      <a href="/about">about with browser reload</a>
    </section>
  );
};

export default App;