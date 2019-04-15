import React from 'react';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
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

const App = () => {
  return (
    <section className="App">
      <Router>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/users">Users</Link>
        <Route exact path="/" component={IndexPage} />
        <Route exact path="/users" component={UsersPage} />
        <Route exact path="/user/:userId" component={UserPage} />
        <Route exact path="/about" component={AboutPage} />
      </Router>
      <a href="/about">about with browser reload</a>
    </section>
  );
};

export default App;