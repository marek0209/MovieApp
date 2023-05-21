import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Provider } from "react-redux";
import AppHeader from "../components/app-header/AppHeader";
import AppFooter from "../components/app-footer/AppFooter";
import Instructions from "../../scenes/instructions/Instructions";
import MovieList from "../../scenes/movie-list/MovieList";
import FavoriteMovies from "../../scenes/favorites/FavoriteMovies";
import store from "../../redux/store";

function App() {
  return (
    <Router>
      <div className="App">
        <AppHeader />
        <main>
          <Provider store={store}>
            <Routes>
              <Route path="/movies" element={<MovieList />} />
              <Route path="/favorites" element={<FavoriteMovies />} />
              <Route path="/" element={<Instructions />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </Provider>
        </main>
        <AppFooter />
      </div>
    </Router>
  );
}

export default App;
