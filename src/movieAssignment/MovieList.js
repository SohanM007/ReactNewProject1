import { useState } from "react";
import MovieCard from "./MovieCard";
import './style.css'

export default function MovieList({movies}){

const[starRating ,setStarRating] = useState([0,0,0]);

function handleMovieStarRating(movieIndex, isIncrement){
  // console.log(movieIndex);
  // console.log(isIncrement ? "increase by 1":"decrease by 1");
  isIncrement =isIncrement ? 1:-1;
  let tempStarRating =[...starRating];
  tempStarRating[movieIndex] =tempStarRating[movieIndex]+isIncrement;
  // console.log(tempStarRating);
  setStarRating(tempStarRating);

}

  return(
    <>
    <section className="movieListContainer">
    {
      movies.map((movie ,index) => {
        return(
          <MovieCard movie={movie} starRating ={starRating[index]} />
        )
      })
      
    }
    </section>
    <section>
           <h3>Change Star rating</h3>
           <h4>Rating of 1st Movie: {starRating[0]}</h4>
                 <button onClick ={ ()=> handleMovieStarRating(0 ,true)}>inc1</button>
                 <button onClick ={ ()=> handleMovieStarRating(0,false)}>dec2</button>
            <h4>Rating of 2nd Movie : {starRating[1]}</h4>
                <button onClick={ ()=> handleMovieStarRating(1,true)}>inc2</button>
                <button onClick={()=> handleMovieStarRating(1,false)} >dec2</button>
            <h4>Rating of 3rd Movie: {starRating[2]}</h4>
                <button onClick={() =>handleMovieStarRating(2,true)}>inc3</button>
                <button onClick={()=> handleMovieStarRating(2,false)}>dec3</button>

    </section>
    </>
  )

}
