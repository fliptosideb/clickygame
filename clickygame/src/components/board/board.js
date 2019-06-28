import React, { Component } from 'react';

import MoviePoster from './moviePoster';
import Score from './score';

const shuffle = arr => (
arr
.map(a => [Math.random(), a])
.sort((a,b) => a[0] - b[0])
.map(a => a[1])
);

const posters = [
    {
        name: 'adaptation',
        img: 'img/adaptation.jpg',
        clicked: false
    },
    {
        name: 'arizona',
        img: 'img/arizona.jpg',
        clicked: false
    },
    {
        name: 'conair',
        img: 'img/conair.jpg',
        clicked: false
    },
    {
        name: 'faceoff',
        img: 'img/faceoff.jpg',
        clicked: false
    },
    {
        name: 'gone',
        img: 'img/gone.jpg',
        clicked: false
    },
    {
        name: 'kissofdeath',
        img: 'img/kissofdeath.jpg',
        clicked: false
    },
    {
        name: 'lasvegas',
        img: 'img/lasvegas.jpg',
        clicked: false
    },
    {
        name: 'matchstick',
        img: 'img/matchstick.jpg',
        clicked: false
    },
    {
        name: 'next',
        img: 'img/next.jpg',
        clicked: false
    },
    {
        name: 'snakeeyes',
        img: 'img/snakeeyes.jpg',
        clicked: false
    },
    {
        name: 'thefamilyman',
        img: 'img/thefamilyman.jpg',
        clicked: false
    },
    {
        name: 'therock',
        img: 'img/therock.jpg',
        clicked: false
    }
]

export default class Board extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: {
                score: 0
            },
            movies: shuffle( posters )
        };
    }

onMovieClick = ( index ) => {
    if ( !this.state.movies[index].clicked ) {
        this.setState ({
            movies: shuffle( this.state.movies.map( (movie, current) => {
                return ( current === index ) ? { ...movie, clicked: true } : movie
            })),
            user: {
                ...this.state.user,
                score: this.state.user.score + 1
            }
        });
    } else {
        this.setState({
            movies: shuffle( this.state.movies.map( movie => { return { ...movie, clicked: false}})),
        user: {
            ...this.state.user,
            score: 0
        }
        });
    }
}

render() {
    return (
        <div>
            <h4> Pick a movie only once.</h4>
            <Score score={this.state.user.score} />
            <MoviePoster movies={this.state.movies} onMovieClick={this.onMovieClick} />
        </div>
    )
}


}