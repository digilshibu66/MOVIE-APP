import React from "react";
import "./list.css";
import { useNavigate } from 'react-router-dom';
 const List=(props)=>{
    
    const navigate = useNavigate();
    const handleSummaryClick = (showId,index) => {
        navigate(`/summary/${showId}/${index}`);
      };
    return(
        <div className="container">
        <ul>
        {props.movies.map((movie,index)=>
        <li key={movie.show.id}>
        <div className="box">
        <img className="imageoff" src={movie.show.image?movie.show.image.medium:movie.show.image} alt="movie"></img>
        <div>
            <label className="nametext">{movie.show.name}</label>
            <label className="language">{movie.show.language}</label>
            <label className="genres">Genre:{movie.show.genres.join(',')}</label>
            <label className="type">Type:{movie.show.type}</label>
            <label className="rating">Rating:{movie.show.rating.average}</label>
        </div>
        <button onClick={() => handleSummaryClick(movie.show.id,index)} className="but">Summary</button>
        </div>
        </li>
        
        )}
        </ul>
        </div>
    )
 }
 export default List;