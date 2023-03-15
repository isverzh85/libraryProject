import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MyBookList from '../Pages/MyBookList/MyBookList';
import Nav from '../Pages/Home/Nav';

function Routes() {
  return (
    <>
      <Router>
        <div>
          <Nav key = "nav" />
            <Switch>
              <Route path="/my-book-list" >
                <MyBookList />
              </Route>
              <Route path="/">
              </Route>  
           </Switch>
        </div>
    </Router>
  </>
 );
}

export default Routes;
