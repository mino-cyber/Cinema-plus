import React, {useState} from 'react';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import DashboardIcon from '@material-ui/icons/DashboardOutlined';
import PeopleIcon from '@material-ui/icons/PeopleOutlined';
import AccountBoxIcon from '@material-ui/icons/AccountBoxOutlined';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import './layoutAdmin.css'
import CinemaView from '../pages/cinema/cinemaView';
import MoviesView from '../pages/movies/moviesView';
import UsersView from '../pages/users/usersView';

 const LayoutAdmin = () => {

  const [page, setPage] = React.useState('movie');
  let navigate = useNavigate();

  return(
    <div className="cinema">
        <div className='leftAdmin'>
          <div className="movieAdmin">
            <div className='logoName'>Cinema +</div>
          </div>
          <div className="listAdmin">
              <List>
                <div className='selectPage'>
                <ListItem>
                    <ListItemIcon className='listItem'>
                        <DashboardIcon className='dashIconAdmin'/>
                    </ListItemIcon>
                    <ListItemText
                        primary="Dashboard"
                    />
                </ListItem>
                </div>
                <div className='selectPage' onClick={() => setPage('movie')}>
                <ListItem>
                    <ListItemIcon className='listItem'>
                        <DashboardIcon className='dashIconAdmin'/>
                    </ListItemIcon>
                    <ListItemText
                        primary="Movies"  
                    />
                </ListItem>
                </div>
                <div className='selectPage' onClick={() => setPage('cinema')}>
                <ListItem>
                    <ListItemIcon className='listItem'>
                        <DashboardIcon className='dashIconAdmin'/>
                    </ListItemIcon>
                    <ListItemText
                        primary="Cinema"
                    />
                </ListItem>
                </div>
                <div className='selectPage' onClick={() => setPage('users')}>
                <ListItem>
                    <ListItemIcon className='listItem'>
                        <PeopleIcon style={{color: "#fff"}}/>
                    </ListItemIcon>
                    <ListItemText
                        primary="Users"
                    />
                </ListItem>
                </div>
              </List>
          </div>
        </div>
          <div className='rightAdmin'>
            <div className="appAdmin">
              <div className='titlePage'>{page}</div>
              <ExitToAppIcon style={{fontSize: '40px', display: "inline-block"}} onClick={() => navigate("/")}></ExitToAppIcon>
            </div>
            {page ==='cinema'?<CinemaView></CinemaView> : page === 'movie'? <MoviesView></MoviesView>
            : page === 'users'? <UsersView></UsersView> : <div></div>}
          </div>
        </div>
     )
 }

 export default LayoutAdmin