import React from "react";
import "./App.css";
import { Viewer } from "./components/Viewer";

function App() {
  return (
    <div className="App">
      <Viewer path="./donut.glb" />
    </div>
  );
}

export default App;
