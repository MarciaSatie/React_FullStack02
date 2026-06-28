import React from "react";
import PageTemplate from '../components/templateMovieListPage';
import { getUpcomingMovies } from "../api/tmdb-api";
import useMovieList from "../hooks/useMovieList";
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';

const UpcomingMoviesPage: React.FC = () => {
    const { movies, setMovies } = useMovieList(getUpcomingMovies);

  return (
    <PageTemplate
      title='Upcoming Movies'
      movies={movies}
      action={(movie) => <PlaylistAddIcon movie={movie} />}
    />
  );
};
export default UpcomingMoviesPage;
