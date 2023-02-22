import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MyBookList from '../components/Buttons/MyBookList/MyBookList';
import Nav from '../Layout/SidePanel/Nav/Nav';

function Routes() {
  return (
    <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/my-book-list">
          <MyBookList/>
          </Route>
        </Switch>
    </BrowserRouter>
  );
}

export default Routes;
