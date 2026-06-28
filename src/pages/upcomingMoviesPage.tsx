import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getUpcomingMovies } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import MustWatchIcon from "../components/cardIcons/mustWatchIcon";

const UpcomingMoviesPage: React.FC = () => {
  const { data, error, isLoading, isError } = useQuery(
    "upcoming",
    getUpcomingMovies
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error instanceof Error ? error.message : "Failed to load movies"}</h1>;
  }

  const movies = data ?? [];

  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={movies}
      action={(movie) => <MustWatchIcon movie={movie} />}
    />
  );
};

export default UpcomingMoviesPage;