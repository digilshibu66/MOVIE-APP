import React,{ useEffect, useState } from "react";
import List from "./components/list";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/header";
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Summary from "./components/summary";
import Book from "./components/book";
function App() {
  const [movies,setMovies]=useState([]);
  useEffect(()=>{
    getMovies();
  })
  const getMovies = async() =>{
    const url ="https://api.tvmaze.com/search/shows?q=all";
    const res =await fetch(url);
    const resJson=await res.json();
    //console.log(resJson);
    setMovies(resJson);
  }
  return (<div>
  
    <div className="head">
    <Header/>
    </div>
      <div className="pp">
    <BrowserRouter>
    <Routes> 
    <Route path="/" element={<List movies={movies} />}/>
    <Route path="/summary/:showId/:index" element={<Summary />}/>
    <Route path="/book/:moviename" element={<Book />}/>
   </Routes>
   </BrowserRouter>
   </div>
   </div>
   
  );
}

export default App;
