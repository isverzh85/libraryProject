// const BookListProvider = ({ children }) => {
//   const [bookList, setBookList] = useState([]);

//   const deleteBookFromList = (bookId) => {
//         const updatedBookList = bookList.filter((book) => book.id !== bookId);
//         setBookList(updatedBookList);
//       };

//   return (
//     <BookListContext.Provider value={{bookList, setBookList, addBookToList, deleteBookFromList}}>
//             {children}
//     </BookListContext.Provider>
//       )
//  };
