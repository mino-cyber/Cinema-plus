import React, {useState} from 'react';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/DashboardOutlined';
import PeopleIcon from '@material-ui/icons/PeopleOutlined';
import AccountBoxIcon from '@material-ui/icons/AccountBoxOutlined';
import './layoutAdmin.css'
import CinemaView from '../pages/cinema/cinemaView';
import MoviesView from '../pages/movies/moviesView';

 const CinemaList = () => {

  const [page, setPage] = React.useState('cinema');

  return(
    <div className="cinema">
        <div className='leftSite'>
          <div className="movie">
            <div className='logo'>Cinema +</div>
          </div>
          <div className="list">
              <List>
                <div className='selectDiv'>
                <ListItem>
                    <ListItemIcon className='listItem'>
                        <DashboardIcon className='dashIcon'/>
                    </ListItemIcon>
                    <ListItemText
                        primary="Dashboard"
                    />
                </ListItem>
                </div>
                <div className='selectDiv' onClick={() => setPage('movie')}>
                <ListItem>
                    <ListItemIcon className='listItem'>
                        <DashboardIcon className='dashIcon'/>
                    </ListItemIcon>
                    <ListItemText
                        primary="Movies"  
                    />
                </ListItem>
                </div>
                <div className='selectDiv' onClick={() => setPage('cinema')}>
                <ListItem>
                    <ListItemIcon className='listItem'>
                        <DashboardIcon className='dashIcon'/>
                    </ListItemIcon>
                    <ListItemText onClick={() => setPage('cinema')}
                        primary="Cinema"
                    />
                </ListItem>
                </div>
                <div className='selectDiv'>
                <ListItem>
                    <ListItemIcon className='listItem'>
                        <PeopleIcon style={{color: "#fff"}}/>
                    </ListItemIcon>
                    <ListItemText
                        primary="Users"
                    />
                </ListItem>
                </div>
               <div className='selectDiv'>
               <ListItem>
                    <ListItemIcon className='listItem'>
                        <AccountBoxIcon style={{color: "#fff"}} />
                    </ListItemIcon>
                    <ListItemText
                        primary="Account"
                    />
                </ListItem>
               </div>
              </List>
          </div>
        </div>
          <div className='rightSite'>
            <div className="cinemaApp">
              <div className='title'>Cinema App</div>
            </div>
            {page ==='cinema'?<CinemaView></CinemaView> : page === 'movie'? <MoviesView></MoviesView>: <div></div>}
          </div>
        </div>
     )
 }

 export default CinemaList