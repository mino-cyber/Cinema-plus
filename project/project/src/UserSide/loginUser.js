import React, {useState} from 'react';
import { Button, Typography } from '@material-ui/core';
import axios from "axios"
import { useNavigate } from "react-router-dom"
import logo from '../logo.png'
import './loginUser.css';

const LoginUser = ()  => {
const [open, setOpen] = useState(false);

const navigate = useNavigate()

const [ userLogin, setUserLogin] = useState({
    emailLogin:"",
    passwordLogin:"",
})

const handleChangeLogin= e => {
    const { name, value } = e.target
    setUserLogin({
        ...userLogin,
        [name]: value
    })
}

const isUser = () => {
    if(userLogin.emailLogin === 'admin@gmail.com' && userLogin.passwordLogin === 'admin'){
        alert("This Admin")
        navigate("/LayoutAdmin")
    }else{
        axios.post("http://localhost:4000/login", userLogin)
        .then( res => {
            if(res.data.message === 'Login Successfully'){
                alert(res.data.message)
                navigate("/homePage")
            }else{
                alert(res.data.message)
            }
        })
    }
}

    const [ userRegister, setUserRegister] = useState({
        first_name: "",
        last_name: "",
        email:"",
        phone: "",
        password:"",
        reEnterPassword: "",
        block: false,
    })

    const handleChangeRegister = e => {
        const { name, value } = e.target
        setUserRegister({
            ...userRegister,
            [name]: value
        })
    }

    

    const register = () => {
        const { first_name, last_name, email, password, reEnterPassword } = userRegister
        if( first_name && last_name && email && password && (password === reEnterPassword)){
            axios.post("http://localhost:4000/register", userRegister)
            .then( res => {
                res.data.message === 'Successfully Registered, please login now!'? setOpen(false) : setOpen(true)
                alert(res.data.message)
            })
        } else {
            alert("invlid input")
        }
        
    }
 
return (
        <div className="total">
                <div className='total1'>
                <div className='total2'>
                <div className="content">
                    <img className='logo' name='logo' src={logo} />
                </div>

                <center>
                {open? <div className='sideinfo'>
                    <form className='form'>
                    <div className='fields'>
                    <div className='titleLogin'>
                        Sign Up
                    </div>
                            <input className='textField' type="text" name="first_name" value={userRegister.first_name} placeholder="Your First Name" onChange={handleChangeRegister}></input>
                            <input className='textField' type="text" name="last_name" value={userRegister.last_name} placeholder="Your Last Name" onChange={handleChangeRegister}></input>
                            <input className='textField' type="text" name="email" value={userRegister.email} placeholder="Your Email" onChange={handleChangeRegister}></input>
                            <input className='textField' type="text" name="phone" value={userRegister.phone} placeholder="Your Phone" onChange={handleChangeRegister}></input>
                            <input className='textField' type="password" name="password" value={userRegister.password} placeholder="Your Password" onChange={handleChangeRegister}></input>
                            <input className='textField' type="password" name="reEnterPassword" value={userRegister.reEnterPassword} placeholder="Re-enter Password" onChange={handleChangeRegister}></input>
                            <Button
                        className='loginButton'
                        size="large"
                        variant="contained"
                        onClick={register}>
                        Register
                    </Button>
                    <Typography className='register' variant="body1">
                        I have aleady account?
                    </Typography>
                    <div
                        className='registerUrl'
                        onClick={() => setOpen(false)}>
                        Login
                    </div>
                    </div>
                    
                    </form>
                </div> :
                    
                    <form className='form'>
                   
                    <div className='fields'>
                    <div className='titleLogin'>
                        Log In
                    </div>
                        <input className='textField' type="email" name="emailLogin" placeholder="Enter your Email" onChange={handleChangeLogin} value={userLogin.emailLogin} ></input>
                        <input className='textField' type="password" name="passwordLogin" placeholder="Enter your password" onChange={handleChangeLogin} value={userLogin.passwordLogin} ></input>
                        <Button
                        className='loginButton'
                        size="large"
                        variant="contained"
                        onClick={isUser}>
                        Login now
                    </Button>
                    <Typography className='register' variant="body1">
                        Don't have an account?
                    </Typography>
                    <div
                        className='registerUrl'
                        onClick={() => setOpen(true)}>
                        Register
                    </div>
                    </div>
                    </form>
                }
                </center>   
                </div>
                </div>
    </div>)
}
export default LoginUser;