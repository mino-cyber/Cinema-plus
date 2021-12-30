import React, {useState} from 'react';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountBoxIcon from '@material-ui/icons/AccountBoxOutlined';
import './homePage.css'
import MoviesView from './movies/moviesView';

 const HomePage = () => {
    let navigate = useNavigate();

  const [page, setPage] = React.useState('cinema');

  return(
    <div className="cinema">
          <div className='rightSite'>
            <div className="cinemaApp">
              <div className='title'>Cinema +</div>
              <div>
                  <AccountBoxIcon style={{fontSize: '40px'}} onClick={() => navigate("/userProfile")}></AccountBoxIcon>
                  <ExitToAppIcon style={{fontSize: '40px'}} onClick={() => navigate("/")}></ExitToAppIcon>
              </div>
            </div>
            {<MoviesView></MoviesView>}
          </div>
        </div>
     )
 }

 export default HomePage