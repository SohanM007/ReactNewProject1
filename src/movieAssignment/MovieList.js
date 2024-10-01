import MovieCard from "./MovieCard";
import './style.css'

export default function MovieList({movies}){
  return(
    <section className="movieListContainer">
    {
      movies.map((movie) => {
        return(
          <MovieCard movie={movie}/>
        )
      })
      
    }
    </section>
  )

}
