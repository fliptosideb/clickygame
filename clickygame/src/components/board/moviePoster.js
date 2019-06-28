import React from 'react';

import Movie from './movie';

const MoviePoster = (props) => {
    return (
        <div className="movie">
            {props.movies.map(( movie, index) => <Movie movie={movie} index={index} onMovieClick={props.onMovieClick} key={movie.name} />)}
        </div>
    )
};

export default MoviePoster;
