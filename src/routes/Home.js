import React from "react";
import axios from "axios";
import Header from "../component/Header";
import Movie from "../component/Movie";
import "./Home.css";

class Home extends React.Component{
    state = {
        isLoading: true,
        movies: []
    };

    getMovies = async() => {
        const {
            data: {
                data: { movies }
            }
        } = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
        this.setState({ movies, isLoading: false })
    }


    componentDidMount() {
        this.getMovies();
    }

    render() {
        const { isLoading, movies } = this.state;
        return (
            <div className="all">
                <Header />
            <section className="container">
                {isLoading
                    ? (
                        <div className="loader">
                            <span className="loader-text">Loading...</span>
                        </div>
                    ) : (
                        <div className="movies">
                            {movies.map(movie => (
                                <Movie
                                    key={movie.id}
                                    id={movie.id}
                                    title={movie.title}
                                    year={movie.year}
                                    rating={movie.rating}
                                    summary={movie.summary}
                                    genres={movie.genres}
                                    poster={movie.medium_cover_image}
                                    time = {movie.runtime}
                                />
                            ))}
                        </div>
                    )
                }
            </section>
            </div>
        );
    }
}

export default Home;