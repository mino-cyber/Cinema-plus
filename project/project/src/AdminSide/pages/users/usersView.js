import React, {useState, useEffect} from 'react';
import { Button } from '@material-ui/core';
import SearchIcon from "@material-ui/icons/Search";
import axios from "axios"
import './users.css'

const UsersView = () => {

    const [ getUser, setGetUser] = React.useState([])

    useEffect(() => {
        axios.get("http://localhost:4000/getUsers")
        .then(res => {
            setGetUser(res.data)
            console.log(getUser)
        })
        .catch(error => console.log(error))
    })
    
return(
    <div className="user">
    <div className='rowUser'>
        <div className='searchUser'>
            <SearchIcon style={{color: '#fff', display: 'inline-block'}}></SearchIcon>
            <input type="text" name="user" placeholder="Search User" ></input>
        </div>
        <div>
        <Button
                style={{marginTop: '100px', backgroundColor: 'rgb(26, 74, 114)', color: '#fff', fontSize: '1rem'}}
                size="small"
                variant="outlined">
                    Add
            </Button>
        </div>
    </div>
    <div className='viewUser'>
    <table>
        <tr>
          <th>Name</th>
          <th>email</th>
          <th>phone</th>
          <th>Block</th>
        </tr>
        {getUser.map((user, key) => {
           return <tr>
           <th>{user.first_name} {user.last_name}</th>
           <th>{user.email}</th>
           <th>{user.phone}</th>
           <th><input
          type="checkbox"
          id="topping"
          name="topping"
          value="Paneer"
          checked={user.block}
        /></th>
         </tr>
        })}
      </table>
    </div>
</div>
)
}

export default UsersView