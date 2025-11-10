import React from "react";
import Book from "./component/Book";
import "./App.css";
import Nav from "./component/nav";

function App() {
  return (
    <div id="adi">
      <Nav></Nav>
      <Book title="Math" price={2000} />
      <Book title="Physics" price={5000} />
      <Book title="Chemistry" price={9000} />
    </div>
  );
}

export default App;