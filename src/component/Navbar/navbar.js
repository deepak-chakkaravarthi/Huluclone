import React from 'react';
import './navbar.css';
import request from '../../helpers/request';
const Navbar = ({setselectedOption}) => {
  return (
    <div className='nav'>
        <h2 onClick={()=>setselectedOption(request.fetchTrending)}>Trending</h2>
        <h2 onClick={()=>setselectedOption(request.fetchTopRated)}>TopRated</h2>
        <h2 onClick={()=>setselectedOption(request.fetchActionMovies)}>Action</h2>
        <h2 onClick={()=>setselectedOption(request.fetchComedyMovies)}>Comedy</h2>
        <h2 onClick={()=>setselectedOption(request.fetchHorrorMovies)}>Horror</h2>
        <h2 onClick={()=>setselectedOption(request.fetchRomanceMovies)}>Romance</h2>
        <h2 onClick={()=>setselectedOption(request.fetchMystery)}>Mystery</h2>
        <h2 onClick={()=>setselectedOption(request.fetchSciFi)}>Sci-fi</h2>
        <h2 onClick={()=>setselectedOption(request.fetchWestern)}>Western</h2>
        <h2 onClick={()=>setselectedOption(request.fetchAnimation)}>Animation</h2>
        <h2 onClick={()=>setselectedOption(request.fetchTV)}>Movies</h2>
    </div>
  );
};

export default Navbar;