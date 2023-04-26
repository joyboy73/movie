import {useEffect, useState} from 'react'
import MovieCard from './MovieCard'
import './App.css'
import SearchIcon from './search.svg'
const API_URL ='http://www.omdbapi.com/?i=tt3896198&apikey=e1ee0fe4'

const movie ={
  
    
      "Title": "Spider-Man: Far from Home",
      "Year": "2019",
      "imdbID": "tt6320628",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg"
    
  }


const App =( ) => {
  const [movies,setMovies] = useState([]);
  const[searchTerm,setsearchTerm] = useState('');
   const searchMovies =async(title)=>{

    console.log(title);
    const response = await fetch (`${API_URL}&s=${title}`)
    const data = await response.json();
    console.log(data);
    setMovies(data.Search);
  }


   useEffect(()=>{
   searchMovies("movie")

   },[]);




  return (

 <div className="app">
  <h1>MovieLand</h1>

  <div className="search">
    <input
    
      placeholder='Search for Movies'
      value={searchTerm}
      onChange ={(e)=> setsearchTerm( e.target.value)}
     
    />
    <img src={SearchIcon} alt="search"
    onClick={()=>searchMovies(searchTerm)}
    />
    
  </div>
 {
 movies?.length > 0
     ?(   
       <div className="container">
    
      {movies.map((movie)=>(
        <MovieCard movie={movie}/>
      ))}
      </div>
    ):(
      <div className='empty'>
        <h2>NO MOVIES FOUND </h2>

      </div>
    )
    

    }
    

             
 </div>
 
 
  );
}

export default App
