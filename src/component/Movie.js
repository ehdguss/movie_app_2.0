import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import "./Movie.css";

function Movie( {id, title, year, rating, genres, summary, poster, time })  {
    return(
        <Link to={ {
            pathname: `/movie/${id}`,
            state: {
                title, year, rating, genres, summary, poster, time
            }
        } }>
            <div className="movie">
                <img src={poster} alt={title} title={title}></img>
                <div className="movie-data">
                    <div className="movie_title">{title}</div>
                    <span className="movie_year">{year} | </span>
                    <span className="movie_time">{time}m</span>
                    <div className="movie_rating">★: {rating}</div>
                    <div className="movie_summary">{summary.slice(0,150)}...</div>
                    <ul className="movie_genres">
                        {genres.map((genre, index) => (
                            <li key={index} className="genres_genre">
                                {genre}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Link>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    time: PropTypes.number.isRequired
}

export default Movie;