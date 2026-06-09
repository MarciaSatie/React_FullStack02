import React from "react";
import PageTemplate from "../src/components/templateMovieListPage";

const FavouriteMoviesPage: React.FC= () => {
  // Get movies from local storage.
  const movies = JSON.parse(localStorage.getItem("favourites") || "[]");


  const toDo = () => true;

  return (
    <PageTemplate
      title="Favourites"
      movies={movies}
      selectFavourite={toDo}
    />
  );
};

export default FavouriteMoviesPage;