import React, {useState, useEffect} from 'react';
import { Typography } from '@material-ui/core';
import { EventSeat, AttachMoney } from '@material-ui/icons';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import { Button } from '@material-ui/core';
import cinema1 from '../../../cinema1.jpg';
import axios from "axios"
import './cinema.css'

const CinemaCard = () => {
    const [open, setOpen] = React.useState(false);
    const [deleteCinema, setDelete] = React.useState(false);
    const [ getCinemas, setGetCinemas] = React.useState([])
    const [ updateCinema, setUpdateCinema] = useState({
        name: "",
        city: "",
        ticketPrice: "",
        numberOfSeats: "",
        photo: "",
    })

    const handleChangeUpdate = e => {
        const { name, value } = e.target
        setUpdateCinema({
            ...updateCinema,
            [name]: value
        })
    }

    const handlePhoto = (e) => {
        setUpdateCinema({...updateCinema, photo: e.target.files[0]});
    }

    useEffect(() => {
        axios.get("http://localhost:4000/getCinemas")
        .then(res => {
            setGetCinemas(res.data)
        })
        .catch(error => console.log(error))
    }, [getCinemas])

    function openDialogUpdate(cinema){
        setOpen(true)
                    setUpdateCinema({...updateCinema,
                        name: cinema.name,
                        city: cinema.city,
                        ticketPrice: cinema.ticketPrice,
                        numberOfSeats: cinema.numberOfSeats,
                        photo: cinema.photo
                    });
    }

    function updateA(id){
        
    }

return (
    <div>
        {getCinemas.map((cinema, key) => {
            return(<div className='totalHome' key={cinema._id}>
            <div className='root'>
                <div className='imageWrapper'>
                    <img alt="cinema" className='image' src={`/images/${cinema.photo}`} />
                </div>
                <div className='details'>
                    <Typography className='name' variant="h6">
                        {cinema.name}
                    </Typography>
                    <Typography className='city' variant="body1">
                        {cinema.city}
                    </Typography>
                </div>
                <div className='stats'>
                    <AttachMoney className='eventIcon' />
                    <Typography className='eventText' variant="body2">
                        {cinema.ticketPrice} <span>&euro;</span> per movie
                    </Typography>
                </div>
                <div className='stats'>
                    <EventSeat className='eventIcon' />
                    <Typography className='eventText' variant="body2">
                        {cinema.numberOfSeats} seats Available
                    </Typography>
                </div>
                <div className='buttonDelete' onClick={() => openDialogUpdate(cinema)}>
                    <center>
                        Update
                    </center>
                </div>
                <div className='buttonDelete' onClick={() => setDelete(true)}>
                    <center>
                        Delete
                    </center>
                </div>
            </div>
            <Dialog className='dialogC' open={open} onClose={() => setOpen(true)} PaperProps={{
                        style: {
                            backgroundColor: "rgb(46, 46, 46)",
                            color: 'white',
                        },
                        }}>
                            <DialogTitle>{"How are you?"}</DialogTitle>
                            <DialogContent>
                            <div className='dialogCInput'>
                                <input type="text" name="name" placeholder="Name" onChange={handleChangeUpdate} value={updateCinema.name}></input>
                                </div>
                                <div className='dialogCInput'>
                                    <input type="text" name="city" placeholder="City" onChange={handleChangeUpdate} value={updateCinema.city}></input>
                                </div>
                                <div className='dialogCInput'>
                                    <input type="text" name="ticketPrice" placeholder="Ticket price" onChange={handleChangeUpdate} value={updateCinema.ticketPrice}></input>
                                </div>
                                <div className='dialogCInput'>
                                    <input type="text" name="numberOfSeats" placeholder="Number of seats available" onChange={handleChangeUpdate} value={updateCinema.numberOfSeats}></input>
                                </div>
                            </DialogContent>
                            <DialogActions>
                            <Button onClick={() => setOpen(false)}
                                    color="primary" autoFocus>
                                Close
                            </Button>
                            <Button onClick={() => {          
                    axios.put('http://localhost:4000/updateCinema/' + cinema._id, updateCinema)
                    alert("Cinema Update")
                    setOpen(false)
                    console.log(`Cinema with id ${cinema._id} updated`)
                            }}
                                    color="primary" autoFocus>
                                Update
                            </Button>
                            </DialogActions>
                        </Dialog>
                        <Dialog className='dialogC' open={deleteCinema} onClose={() => setDelete(false)} PaperProps={{
                        style: {
                            backgroundColor: "rgb(46, 46, 46)",
                            color: 'white',
                        },
                        }}>
                            <DialogTitle>{"Are you sure you want to delete this Cinema?"}</DialogTitle>
                            <DialogActions>
                            <Button onClick={() => setDelete(false)}
                                    color="primary" autoFocus>
                                No
                            </Button>
                            <Button onClick={() => {
                                axios.delete('http://localhost:4000/deleteCinema/' + cinema._id)
                                alert('Cinema Deleted')
                                console.log(`Delete Cinema with id ${cinema._id}`)
                            }}
                                    color="primary" autoFocus>
                                Yes
                            </Button>
                            </DialogActions>
                        </Dialog>
        </div>)
        })}
        
    </div>
    
);
}

export default CinemaCard;