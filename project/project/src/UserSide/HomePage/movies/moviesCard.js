import React, {useState, useEffect} from 'react';
import { Typography } from '@material-ui/core';
import { EventSeat, AttachMoney } from '@material-ui/icons';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import { Button } from '@material-ui/core';
import axios from "axios"
import './movies.css'


const MovieCard = () => {
    const [ getMovie, setGetMovie] = React.useState([])

    useEffect(() => {
        axios.get("http://localhost:4000/getMovies")
        .then(res => {
            setGetMovie(res.data)
        })
        .catch(error => console.log(error))
    })

return (
    <div>
        {getMovie.map((movie, key) => (<div className='totalHome' key={movie._id}>
        <div className='root'>
            <div className='imageWrapper'>
                <img alt="movie" className='image' src={`/uploads/${movie.photo}`} />
            </div>
            <div className='details'>
                <Typography className='name' variant="h6">
                    {movie.name}
                </Typography>
                <Typography className='city' variant="body1">
                    {movie.description}
                </Typography>
            </div>
            <div className='stats'>
                <Typography className='eventText' variant="body2">
                    {movie.classification}
                </Typography>
            </div>
        </div>
    </div>))}
        
    </div>
    
);
}

export default MovieCard;