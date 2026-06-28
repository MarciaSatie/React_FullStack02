import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getUpcomingMovies } from "../api/tmdb-api";
import useMovieList from "../hooks/useMovieList";
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";

const UpcomingMoviesPage: React.FC = () => {
  const { movies } = useMovieList(getUpcomingMovies);

  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={movies}
      action={(movie) => <AddToFavouritesIcon movie={movie} />}
    />
  );
};

export default UpcomingMoviesPage;