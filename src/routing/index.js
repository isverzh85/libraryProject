import React from 'react';
import { BrowserRouter as Router, HashRouter, Switch, Route } from 'react-router-dom';
import MyBookList from '../Pages/MyBookList/MyBookList';
import HomePage from '../Pages/Home/Home';

function Routes() {
  return (
    <HashRouter>
       <div>
          <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/my-book-list" component={MyBookList} />
          </Switch>
         </div>
      </HashRouter>
   );
}
export default Routes;
