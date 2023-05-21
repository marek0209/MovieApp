import React from "react";
import "./App.css";
import AppHeader from "../components/app-header/AppHeader";
import AppFooter from "../components/app-footer/AppFooter";
import Instructions from "../../scenes/instructions/Instructions";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <main>
        <Instructions />
      </main>
      <AppFooter />
    </div>
  );
}

export default App;
