import React, { useState, useCallback } from "react";
import { BaseMovieProps, Review } from "../types/interfaces";

interface MovieContextInterface {
  favourites: number[];
  addToFavourites: (movie: BaseMovieProps) => void;
  removeFromFavourites: (movie: BaseMovieProps) => void;
  addReview: (movie: BaseMovieProps, review: Review) => void;
  addToMustWatch: (movie: BaseMovieProps) => void;
  mustWatch: number[];
}

const initialContextState: MovieContextInterface = {
  favourites: [],
  mustWatch: [],
  addToFavourites: () => {},
  removeFromFavourites: () => {},
  addToMustWatch: () => {},
  addReview: () => {},
};

// eslint-disable-next-line react-refresh/only-export-components
export const MoviesContext = React.createContext<MovieContextInterface>(
  initialContextState
);

const MoviesContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [favourites, setFavourites] = useState<number[]>([]);
  const [mustWatch, setMustWatch] = useState<number[]>([]);
  const [, setMyReviews] = useState<Review[]>([]);

  const addToFavourites = useCallback((movie: BaseMovieProps) => {
    setFavourites((prevFavourites) => {
      if (!prevFavourites.includes(movie.id)) {
        return [...prevFavourites, movie.id];
      }
      return prevFavourites;
    });
  }, []);

  const removeFromFavourites = useCallback((movie: BaseMovieProps) => {
    setFavourites((prevFavourites) =>
      prevFavourites.filter((mId) => mId !== movie.id)
    );
  }, []);

  const addToMustWatch = useCallback((movie: BaseMovieProps) => {
    setMustWatch((prevMustWatch) => {
      if (!prevMustWatch.includes(movie.id)) {
        const updated = [...prevMustWatch, movie.id];
        console.log(updated);
        return updated;
      }
      console.log(prevMustWatch);
      return prevMustWatch;
    });
  }, []);

  const addReview = useCallback((movie: BaseMovieProps, review: Review) => {
    setMyReviews((prevReviews) => [
      ...prevReviews,
      { ...review, movieId: movie.id },
    ]);
  }, []);

  return (
    <MoviesContext.Provider
      value={{
        favourites,
        mustWatch,
        addToFavourites,
        removeFromFavourites,
        addToMustWatch,
        addReview,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
export default MoviesContextProvider;