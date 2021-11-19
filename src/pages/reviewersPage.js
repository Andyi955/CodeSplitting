import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getMovieReviews } from "../api";
import MovieReview from "../components/movieReview";

const MovieReviewers = (props) => {
  const { id } = props.match.params;
  const [reviews, setReviews] = useState([]);
  const [selectedReview, setSelectedReview] = useState(undefined);
  console.log(selectedReview);
  useEffect(() => {
    getMovieReviews(id).then((reviews) => {
      setReviews(reviews);
    });
  }, []);

  const reviewsAuthors = reviews.map((r, index) => {
    return (
      <li key={r.author}>
        <button
          className="listbutton"
          onClick={(event) => setSelectedReview(index)}
        >
          {r.author}
        </button>
      </li>
    );
  });
  return (
    <>
      <h1>Movie Reviewers</h1>
      <ul>{reviewsAuthors}</ul>
      {selectedReview !== undefined ? (
        <MovieReview review={reviews[selectedReview]} />
      ) : null}
    </>
  );
};

export default MovieReviewers;
