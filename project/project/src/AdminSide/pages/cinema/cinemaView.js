import React, {useState, useEffect} from 'react';
import cinema1 from '../../../cinema1.jpg';
import { Button } from '@material-ui/core';
import CinemaCard from './cinema'
import SearchIcon from "@material-ui/icons/Search";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import axios from "axios"
import './cinema.css'

const CinemaView = () => {
const [open, setOpen] = React.useState(false);

const [ addCinema, setAddCinema] = useState({
    name: "",
    city: "",
    ticketPrice: "",
    numberOfSeats: "",
    photo: "",
})

const handleChangeAddCinema = e => {
    const { name, value } = e.target
    setAddCinema({
        ...addCinema,
        [name]: value
    })
}

const handlePhoto = (e) => {
    setAddCinema({...addCinema, photo: e.target.files[0]});
}

const addCinemaToDB = (e) => {
    e.preventDefault();
        const formData = new FormData();
        formData.append('name', addCinema.name);
        formData.append('city', addCinema.city);
        formData.append('ticketPrice', addCinema.ticketPrice);
        formData.append('numberOfSeats', addCinema.numberOfSeats);
        formData.append('photo', addCinema.photo);

    const{name, city, ticketPrice, numberOfSeats, photo} = addCinema
    if(name && city && ticketPrice && numberOfSeats && photo){
        axios.post("http://localhost:4000/addCinema", formData)
        .then( res => {
            alert(res.data.message)
            setOpen(false)
        })
    }else {
        alert("invlid input")
    }
}

    return(
        <div className="cinema">
            <div className='rowCinema'>
                <div className='searchCinema'>
                    <SearchIcon style={{color: '#fff', display: 'inline-block'}}></SearchIcon>
                    <input type="text" name="cinema" placeholder="Search cinema" ></input>
                </div>
                <div>
                <Button
                        style={{marginTop: '100px', backgroundColor: 'rgb(26, 74, 114)', color: '#fff', fontSize: '1rem'}}
                        size="small"
                        variant="outlined" onClick={() => setOpen(true)}>
                            Add
                    </Button>
                    <Dialog className='dialogC' open={open} onClose={() => setOpen(false)} PaperProps={{
                    style: {
                        backgroundColor: "rgb(46, 46, 46)",
                        color: 'white',
                    },
                    }}>
                        <DialogTitle>{"How are you?"}</DialogTitle>
                        <DialogContent>
                        <input 
                type="file" 
                accept=".png, .jpg, .jpeg"
                name="photo"
                onChange={handlePhoto}
            />
                        <div className='dialogCInput'>
                            <input type="text" name="name" placeholder="Enter ciname name" onChange={handleChangeAddCinema} value={addCinema.name}></input>
                            </div>
                            <div className='dialogCInput'>
                                <input type="text" name="city" placeholder="Enter City" onChange={handleChangeAddCinema} value={addCinema.city}></input>
                            </div>
                            <div className='dialogCInput'>
                                <input type="text" name="ticketPrice" placeholder="Ticket Price" onChange={handleChangeAddCinema} value={addCinema.ticketPrice}></input>
                            </div>
                            <div className='dialogCInput'>
                                <input type="text" name="numberOfSeats" placeholder="Number of seats available" onChange={handleChangeAddCinema} value={addCinema.numberOfSeats}></input>
                            </div>
                        </DialogContent>
                        <DialogActions>
                        <Button onClick={()=>setOpen(false)}
                                color="primary" autoFocus>
                            Close
                        </Button>
                        <Button onClick={addCinemaToDB}
                                color="primary" autoFocus>
                            Add
                        </Button>
                        </DialogActions>
                    </Dialog>
                </div>
            </div>
            <div className='viewCinema'>
                <CinemaCard/>
            </div>
        </div>
    )
}

export default CinemaView