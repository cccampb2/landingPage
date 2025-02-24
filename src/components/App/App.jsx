import { useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import Header_2 from "../Header_2/Header_2";
import Main from "../Main/Main";
function App() {
  return (
    <div className="page">
      <div className="page__content">
        <Header_2 />
        <Main />
      </div>
    </div>
  );
}

export default App;
