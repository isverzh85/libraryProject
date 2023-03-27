import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MyBookList from '../Pages/MyBookList/MyBookList';
import HomePage from '../Pages/Home/Home';

function Routes() {
  return (
    <Router>
       <div>
          <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/my-book-list" component={MyBookList} />
          </Switch>
         </div>
      </Router>
   );
}
export default Routes;
