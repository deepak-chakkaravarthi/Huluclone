import React, { useEffect, useState } from 'react'
import axios from "../../helpers/axios";
import VideoCard from '../VideoCard/VideoCard';
import './Result.css';
import FilpMove from "react-flip-move";
const Result = ({selectedOption}) => {
const [movies,setmovies]= useState([])
    useEffect(()=>{
        const fecthData = async()=>{
            const request = await axios.get(selectedOption);
            setmovies(request.data.results);
        };
        fecthData();
    },[selectedOption]);
    
  return (
    <div className='results'>
      <FilpMove>
      {
        movies.map((movie)=>(
            <VideoCard key={movie.id} movie={movie} />
        ))
      }
      </FilpMove>
    </div>
  );
};

export default Result
