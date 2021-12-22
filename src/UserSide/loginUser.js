import React from 'react';
import './loginUser.css';
import { Button, TextField, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";


const LoginUser = ()  => {
const title = 'CINEMA PLUS';
const description = 'cinema plus will make your viewing experience unique';
const forgotPassword = " ";   
const [open, setOpen] = React.useState(false);

const handleClickToOpen = () => {
	setOpen(true);
};

const handleToClose = () => {
	setOpen(false);
};
 
  return (
    <div className="total">
        <center>
            <div className='marginDiv'>
              <div className="content">
                <h1>{title}</h1>
                <p> {description}</p>
              </div>

              <div className='sideinfo'>
                <center>
                  <form className='form'>
                    <Typography className='title' variant="h2">
                      Sign in
                    </Typography>

                    <div className='fields'>
                      <input
                        className='textField'
                        placeholder="Enter your Email"
                        name="email"
                        type="email"
                      />
                      <input
                        className='textField'
                        placeholder="Password"
                        name="password"
                        type="password"
                      />
                    </div>
                    <Button
                      className='loginButton'
                      color="primary"
                      size="large"
                      variant="contained">
                      Login now
                    </Button>
                    <Typography className='register' variant="body1">
                      Don't have an account?
                    </Typography>
                    <Button
                      className='registerUrl'
                      size="large"
                      variant="contained"
                      onClick={handleClickToOpen}>
                      Register
                    </Button>
                    <Dialog className='dialogC' open={open} onClose={handleToClose} PaperProps={{
                    style: {
                        backgroundColor: "rgb(46, 46, 46)",
                        color: 'white',
                    },
                    }}>
                        <DialogTitle>{"Create new Account"}</DialogTitle>
                        <DialogContent>
                        <div className='dialogCInput'>
                            <input type="text" name="name" placeholder="Name" ></input>
                            </div>
                            <div className='dialogCInput'>
                                <input type="text" name="email" placeholder="Email" ></input>
                            </div>
                            <div className='dialogCInput'>
                                <input type="text" name="phone" placeholder="Phone" ></input>
                            </div>
                            <div className='dialogCInput'>
                                <input type="text" name="password" placeholder="password" ></input>
                            </div>
                            <div className='dialogCInput'>
                                <input type="text" name="passwordConfirmation" placeholder="Password confirmation" ></input>
                            </div>
                        </DialogContent>
                        <DialogActions>
                        <Button onClick={handleToClose}
                                color="primary" autoFocus>
                            Close
                        </Button>
                        <Button onClick={handleToClose}
                                color="primary" autoFocus>
                            Add
                        </Button>
                        </DialogActions>
                    </Dialog>
                  </form>
                </center>
              </div>
            </div>
        </center>
    </div>)
}

export default LoginUser;