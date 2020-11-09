import React from 'react';
import {Link} from 'react-router-dom';

export default function SavedList(props) {
  console.log(props);

  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <Link to={`/movies/${movie.id}`} className="linkComponent">
          {movie.title}
          </Link>
      ))}
      <Link to="/" className="linkComponent">
        <div className="home-button">Home</div>
      </Link>
    </div>
  );
}
