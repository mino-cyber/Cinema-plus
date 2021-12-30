import { Button } from '@material-ui/core';
import React from 'react';
import './userProfile.css';
import film from '../../film.jpg';


const UserProfile = () => {

    const [update, setUpdate] = React.useState(false);
  
  //  let userPicture= ;  
   // let userName = ;
  // let userEmail = ;
  // let joinedTime = ;
   
return (
    <center>
        <div className='userPage'>
            {update? <div className='total'>
            <div className='updateProfile'>
            <img alt="image" src={film}/>
                <div className='dialogCInput'>
                    <input type="text" name="first_name" placeholder="Your First Name"></input>
                </div>
                <div className='dialogCInput'>
                    <input type="text" name="last_name" placeholder="Your Last Name"></input>
                </div>
                <div className='dialogCInput'>
                    <input type="text" name="email" placeholder="Your Email"></input>
                </div>
                <div className='dialogCInput'>
                    <input type="text" name="phone" placeholder="Your Phone"></input>
                </div>
                <div className='dialogCInput'>
                    <input type="password" name="password" placeholder="Your Password"></input>
                </div>
                <Button
                    className='loginButton'
                    color="re"
                    size="large"
                    variant="contained"
                    onClick={() => setUpdate(false)}>
                    Canel
                </Button>
                <Button
                    className='loginButton'
                    color="re"
                    size="large"
                    variant="contained">
                    Save Change
                </Button>
            </div>
            </div> : <div className='total'>
            <div className='profileInfo'>
            <img alt="image" src={film}/>
                <div>
                Name: Ehab
                <br></br>
                <br></br>
                Email: ehab@gmail.com
                <br></br>
                <br></br>
                Phone: 123456789
                </div>
                <Button
                    className='loginButton'
                    size="large"
                    variant="contained"
                    onClick={() => setUpdate(true)}>
                    Update Profile
                </Button>
            </div>
            </div>}
            
        </div>
    </center>
)
}
 
export default UserProfile