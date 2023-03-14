import React, { useContext, createContext } from 'react';
import Routing from './routing/index';
import './Pages/Home/styles.module.scss';
import './Pages/MyBookList/styles.module.scss';
import { MyAddedBookListContext } from './context/BookList/MyBookListContext';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"></link>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet"></link>
      {/* <BookListProvider> */}
      <MyAddedBookListContext.Provider value={{ myAddedBookList: "Test" }}>
        <Routing/>
      </MyAddedBookListContext.Provider>
      {/* </BookListProvider>  */}
      </header>
    </div>
  );
}

export default App;