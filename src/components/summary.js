import React,{ useEffect, useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import "./summary.css"
const Summary = ({}) => {
  const { showId,index } = useParams();
  const [movielist,setMovielist]=useState([]);
  const [selectedItem, setSelectedItem] = useState([]);
  const [moviename,setMoviename]=useState([]);
  const navigate = useNavigate();
  
  useEffect(()=>{
    getMovielist();
    //const foundItem = movielist[index].show;
    //setSelectedItem(foundItem);
    //console.log(foundItem);
  })
  //console.log(selectedItem);
  const getMovielist = async() =>{
    const url ="https://api.tvmaze.com/search/shows?q=all";
    const res =await fetch(url);
    const resJson=await res.json();
    console.log(movielist);
    setMovielist(resJson[index].show);
    setMoviename(resJson[index].show.name);
  }
  const handleBookTicket = () => {
    navigate(`/book/${moviename}`);
  };
  return (<div  className='card'>
    <div  className='card1'>
        <label className='ppp'>{movielist.name}</label>
        <div className='run'>
        <label>Duration:{movielist.runtime} minutes</label>
        </div>
        <div className='summary1'>
        <label>{movielist.summary}</label>
        </div>
        <img className="ima" src={movielist.image?movielist.image.medium:movielist.image} alt="movie"></img>
        <div className="butt">
        <button onClick={() => handleBookTicket(movielist.name)} >Book ticket</button>
        </div>
    </div>
    </div>
  );
};

export default Summary;
