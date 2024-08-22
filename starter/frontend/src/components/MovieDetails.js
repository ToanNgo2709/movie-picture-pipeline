import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MovieDetail({ movie }) {
  const [details, setDetails] = useState(null);
  const API_URL = 'http://aab1999ee8a5e419db6ed7c8d400729e-338363811.us-east-1.elb.amazonaws.com';
  console.log('API URL:', process.env.REACT_APP_MOVIE_API_URL);

  useEffect(() => {
    axios.get(`${API_URL}/movies/${movie.id}`).then((response) => {
      setDetails(response.data);
    });
  }, [movie]);

  return (
    <div>
      <h2>{details?.movie.title}</h2>
      <p>{details?.movie.description}</p>
    </div>
  );
}

export default MovieDetail;
