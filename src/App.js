import React, { useState } from 'react';
import Routing from './routing/index';
import './Pages/Home/styles.module.scss';
import './Pages/MyBookList/styles.module.scss';
import {BookListContext} from '../src/components/Context/index';


function App() {
  
  const [bookList, setBookList] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet"></link>
      <BookListContext.Provider value={[bookList, setBookList]}>
          <Routing/>
      </BookListContext.Provider>
      </header>
    </div>
  );
}

export default App;