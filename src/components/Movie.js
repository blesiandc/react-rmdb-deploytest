import React from 'react';

//Components
import Navigation from './elements/Navigation';
import MovieInfo from './elements/MovieInfo';
import MovieInfoBar from './elements/MovieInfoBar';
import Actor from './elements/Actor';
import Spinner from './elements/Spinner';
import Grid from './elements/Grid';
import { useMovieFetch } from './hook/useMovieFetch';


const Movie = ({ movieId }) => {
    
    const [movie, loading, error] = useMovieFetch(movieId);
    console.log(movie);

    if(error) return <div>Something went wrong...</div>
    if(loading) return <Spinner />
 

    return (
        <>
        <Navigation movie={movie.original_title} />
        <MovieInfo movie={movie} />
        <MovieInfoBar  
            time={movie.runtime}
            budget={movie.budget}
            revenue={movie.revenue}
        />

        <Grid header="Actors">
            {movie.actor.map(actor => (
             <Actor key={actor.credit_id} actor={actor}></Actor>
            ))}
        </Grid>
    </>
    )
};

export default Movie;