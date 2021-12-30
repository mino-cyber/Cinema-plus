import React, {useState} from 'react';
import MoviesCard from './moviesCard'
import SearchIcon from "@material-ui/icons/Search";
import './movies.css'

const MoviesView = () => {

    return(
        <div className="cinema">
            <div className='row'>
                <div className='searchCinema'>
                    <SearchIcon style={{color: '#fff', display: 'inline-block'}}></SearchIcon>
                    <input type="text" name="cinema" placeholder="Search cinema" ></input>
                </div>
            </div>
            <div className='viewCinema'>
                <MoviesCard/>
            </div>
        </div>
    )
}

export default MoviesView