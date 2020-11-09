import React from 'react';
import {Link} from 'react-router-dom';

export default function MovieCard (props) {

  const { title, director, metascore, id , stars} = props.movie;
  const starOn =  props.starOn;

  function starList() {
    return stars.map(star => {
      return (<div key={star} className="movie-star">{star}</div>);
    });
  }


  return (
  <div className="movie-card">
    <Link to={`/movies/${id}`} className="linkComponent">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      {starOn ? <Stars starList={starList}/> : <div></div>}
    </Link>
    </div>);
}

const Stars = (props) => {
  const {starList} = props;
  return (
    <div>
      <h3>Stars:</h3>
      {starList()}
    </div>
  );
}