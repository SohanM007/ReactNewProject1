import Navbar from "./Navbar";
import MovieList from "./MovieList";  



const moviesArray =[
  {
    title:'The Avengers',
    description: 'Earths mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.',
    rating:'8.0',
    img: 'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg'
  },
  {
    title:'Jungle',
    description: 'A group of friends join a guide for a trek into the Bolivian jungle, searching for an Indian village. The men soon realize that the jungle is a difficult place to be.',
 
    rating:'6.7',
    img: 'https://m.media-amazon.com/images/M/MV5BNDE4OTk4MTk0M15BMl5BanBnXkFtZTgwODQ4MTg0MzI@._V1_SX300.jpg'
  },
  {
    title:'Pushpa',
    description: 'This film is a dedication to the filmmakers mother based on the time when she was pregnant with him.',
 
    rating:'8.4',
    img: 'https://m.media-amazon.com/images/M/MV5BZjQ5NTY2OWMtMDU4OS00ZmRhLTg1ZWItZTA1NjA5MjllMTNiXkEyXkFqcGdeQXVyMzU4ODM5Nw@@._V1_SX300.jpg'
  },
]
export default function App() {
  return (
    <>
      <Navbar title="Movie Website" />
      <MovieList movies ={moviesArray}/>
    
    </>
  );
}
