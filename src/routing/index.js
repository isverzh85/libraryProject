import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import MyBookList from './MyBookList';


function App() {
    return (
        <Router>
         <div>
          <nav>
          <ul>
            <li>
              <Link to="/my-book-list">My Book List</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/my-book-list">
            <MyBookList />
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;


