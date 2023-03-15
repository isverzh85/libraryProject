import React, { createContext, useState } from "react";

export const MyAddedBookListContext = createContext({
  myAddedBookList: "Default Value",
  changeAddedBookList: (value) => {},
});

export default MyAddedBookListContext;
