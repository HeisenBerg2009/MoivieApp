import { movies } from "../../data/movies";
import { MovieCard } from "../movieCard/movieCard";

export const MovieGrid = () => {
    console.log(movies);

    return (
        <>
            <h1>View All Movies</h1>
            {movies.map(function(item) {
                return <MovieCard singleMovie={item} key={item.id} />;
            })}
        </>
    )
}