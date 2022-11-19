import { ThumbUpSharp } from '@mui/icons-material';
import React from 'react'
import TextTruncate from 'react-text-truncate';
import './VideoCard.css';
import { forwardRef } from 'react';
const base_url ="http://image.tmdb.org/t/p/original"

const VideoCard = forwardRef(({movie},ref) => {
  return (
    <div ref={ref} className='videocard'>
      <img src={`${base_url}${movie.backdrop_path || movie.poster_path}`} alt=""/>
      <TextTruncate 
      line={1}
      element="p"
      truncateText='...'
      text={movie.overview}
      />
      <h2>{movie.title || movie.original_name}</h2>
      <p className='videocard-stats'>
        {movie.media_type && `${movie.media_type} .`}
        {movie.release_date || movie.first_air_date } .
        <ThumbUpSharp /> {""} {movie.vote_count}
      </p>
    </div>
  );
});

export default VideoCard;
