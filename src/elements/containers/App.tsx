import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import AppHeader from "../components/app-header/AppHeader";
import AppFooter from "../components/app-footer/AppFooter";
import Instructions from "../../scenes/instructions/Instructions";
import MovieList from "../../scenes/movie-list/MovieList";
import store from "../../redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppHeader />
        <main>
          <MovieList />
          <Instructions />
        </main>
        <AppFooter />
      </div>
    </Provider>
  );
}

export default App;
