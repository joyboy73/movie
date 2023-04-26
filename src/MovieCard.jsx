import React from "react";



const MovieCard =({movie}) =>{
 return(
    <d iv className="movie">
      <div>
      <p>{movie.Year}</p>
    </div>

    <div>

      <img className='img' src={movie.Poster !== 'N/A' ? movie.Poster:'https://via.placeholder.com/400'} alt={movie.Title}/>

    </div>
    
    <div>
      <span>{movie.Type}</span>
      <h3>{movie.Title}</h3>
    </div>

  </d>

 ); 
}
export default MovieCard;