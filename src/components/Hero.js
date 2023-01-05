import React, {useEffect,useState} from 'react';
import axios from '../fetchData';
import requests from '../requests';
import './hero.css';
import { FaInfo } from 'react-icons/fa';
import { FaPlay } from 'react-icons/fa';





const Hero = () => {
    const [movie, setMovie] = useState([])

    useEffect(() => {
        async function fetchData(){
            const request= await axios.get(requests.fetchPopular);
            setMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length -1)
                ]);

            return request;
        }
        fetchData();
    }, [])

    return (
        <header className='hero'
                style={{
                    backgroundSize:'cover',
                    backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                    backgroundPosition: "center center",
                }}
        >
            <div className="heroContent">
                <h1>{movie?.title || movie?.name || movie?.original_name} </h1>
                <div className="heroButtons">
                    <button className="heroButton blueButton">
                        <FaPlay/> ㅤPlay
                    </button>
                    <button className="heroButton">
                        <FaInfo/> <font-awesome-icon icon="react"/>ㅤMore Info
                    </button>
                </div>
                <p className="heroDesc">
                    {movie?.overview}
                </p>
            </div>

        </header>
    )
}

export default Hero
