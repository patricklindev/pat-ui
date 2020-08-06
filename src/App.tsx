import React from "react";
import Tabs from "./components/Tabs/Tabs";

function App() {
  return (
    <div className="App">
      <h1>Esther's Tab Component Demo</h1>

      <Tabs headings={["Tab1", "Tab2"]} />
    </div>
  );
}

export default App;
