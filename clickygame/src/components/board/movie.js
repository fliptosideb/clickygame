import React, { Component } from 'react'

export default class Movie extends Component {

    handleClick = () => {
        this.props.onMovieClick(this.props.index);
    }

    render() {
        return (
            <div>
                <img src={this.props.movie.img} alt="movie" className="movie-poster" onClick={this.handleClick}/>
            </div>
        )
    }

}