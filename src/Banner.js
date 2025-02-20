import React, { useState, useEffect } from 'react';
import axios from './axios';
import requests from './request';
import './Banner.css';

function Banner() {
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(requests.fetchNetflixOriginals);
                const randomIndex = Math.floor(Math.random() * response.data.results.length);
                setMovie(response.data.results[randomIndex]);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, []);

    function truncate(str, n) {
        return str?.length>n? str.substr(0,n - 1) + "..." : str;
    }

    return (
        <header className='banner'
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(
                    "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
                )`,
                backgroundPosition: "center center"
            }}>
            <div className='banner_contents'>
                <h1 className='banner_title'>
                    {movie?.title || movie?.name || movie?.original_name}
             </h1>
               <div className='banner_buttons'>
                <button className='banner__button'>Play</button>
                <button className='banner__button'>My List</button>

               </div>
               <h1 className='banner_description'>
                {truncate(movie?.overview, 150)}
               </h1>
                
            </div>

            
            <div className='banner--fadeBottom'/>
        </header>
    );
}

export default Banner;
