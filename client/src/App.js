import React from "react";
import { Search } from "./pages";
import { Navigation } from "./components";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <Navigation />
        <div className="wrapper">
          <Search />
        </div>
      </div>
    </>
  );
}

export default App;
