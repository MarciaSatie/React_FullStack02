import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import { MovieDetailsProps } from "../../types/interfaces"; 
import FavoriteIcon from "@mui/icons-material/Favorite";
import Avatar from "@mui/material/Avatar";
import { json } from "react-router-dom";

const styles = {
  root: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    padding: 1.5,
  },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
};


const MovieHeader: React.FC<MovieDetailsProps> = (movie) => {
  // Retrieve the favourites array from localStorage
  const storedFavourites = JSON.parse(localStorage.getItem("favourites") || "[]");
  console.log("current movie id:", movie.id);
  console.log("stored favourites:", storedFavourites);
  
  // Check if the current movie exists in the stored favourites array
  // .some() returns true if ANY item in the array matches the condition
  const isFavourite = storedFavourites.some((favMovie: { id: number }) => {
    console.log("checking favMovie id:", favMovie.id, "against:", movie.id);
    return favMovie.id === movie.id;
  });
  console.log("isFavourite:", isFavourite);
  console.log("isFavourite:", isFavourite);

  return (
    <Paper component="div" sx={styles.root}>
      <IconButton aria-label="go back">
      <ArrowBackIcon color="primary" fontSize="large" />
      </IconButton>

      {isFavourite ? (
        <Avatar sx={styles.avatar}>
          <FavoriteIcon />
        </Avatar>
      ) : null}

      <Typography variant="h4" component="h3">
        {movie.title}{"   "}
        <a href={movie.homepage}>
          <HomeIcon color="primary"  fontSize="large"/>
        </a>
        <br />
        <span>{`${movie.tagline}`} </span>
      </Typography>
      <IconButton aria-label="go forward">
        <ArrowForwardIcon color="primary" fontSize="large" />
      </IconButton>
    </Paper>
  );
};

export default MovieHeader;
