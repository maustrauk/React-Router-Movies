import React from 'react';
import {Link, NavLink} from 'react-router-dom';

export default function SavedList(props) {
  console.log(props);

  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <NavLink to={`/movies/${movie.id}`}>
          {movie.title}
          </NavLink>
      ))}
      <Link to="/" className="linkComponent">
        <div className="home-button">Home</div>
      </Link>
    </div>
  );
}
