import { useEffect, useState } from "react";
import { BaseMovieProps } from "../types/interfaces";

// This hook fetches a list of movies and stores them in state.
const useMovieList = (fetchMovies: () => Promise<BaseMovieProps[]>) => {
  // Create state to hold the movie list.
  const [movies, setMovies] = useState<BaseMovieProps[]>([]);

  // Run the fetch when the hook is first used, or if fetchMovies changes.
  useEffect(() => {
    // Call the passed-in fetch function.
    fetchMovies()
      .then((data) => {
        // Save the returned movies into state.
        setMovies(data);
      });
  }, [fetchMovies]);// keep an eye for any changes at fetchMovies function

  // Return the movies and the setter so the page can use them.
  return { movies, setMovies };
};

export default useMovieList;