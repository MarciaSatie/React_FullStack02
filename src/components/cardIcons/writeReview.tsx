import React from "react";
import RateReviewIcon from "@mui/icons-material/RateReview";
import { BaseMovieProps } from "../../types/interfaces";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";

interface WriteReviewProps {
  movie: BaseMovieProps;
}

const WriteReview: React.FC<WriteReviewProps> = ({ movie }) => {
  return (
    <Link to={`/reviews/${movie.id}`}>
      <IconButton aria-label="write a review">
        <RateReviewIcon color="primary" fontSize="large" />
      </IconButton>
    </Link>
  );
};

export default WriteReview;