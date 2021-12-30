import React, {useState, useEffect} from 'react';
import { Typography } from '@material-ui/core';
import { EventSeat, AttachMoney } from '@material-ui/icons';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import { Button } from '@material-ui/core';
import axios from "axios"
import './movies.css'


const MovieCard = () => {
    const [open, setOpen] = React.useState(false);
    const [deleteMovie, setDelete] = React.useState(false);
    const [ getMovie, setGetMovie] = React.useState([])
    const [ updateMovie, setUpdateMovie] = useState({
        name: "",
        description: "",
        classification: "",
        photo: "",
    })

    const handleChangeUpdate = e => {
        const { name, value } = e.target
        setUpdateMovie({
            ...updateMovie,
            [name]: value
        })
    }

    const handlePhoto = (e) => {
        setUpdateMovie({...updateMovie, photo: e.target.files[0]});
    }

    useEffect(() => {
        axios.get("http://localhost:4000/getMovies")
        .then(res => {
            setGetMovie(res.data)
        })
        .catch(error => console.log(error))
    })

    function openDialogUpdate(movie){
        setOpen(true)
        setUpdateMovie({...updateMovie,
            name: movie.name,
            description: movie.description,
            classification: movie.classification,
            photo: movie.photo
        });
    }

return (
    <div>
        {getMovie.map((movie, key) => (<div className='totalHome' key={movie._id}>
        <div className='root'>
            <div className='imageWrapper'>
                <img alt="movie" className='image' src={`/uploads/${movie.photo}`} />
            </div>
            <div className='details'>
                <Typography className='name' variant="h6">
                    {movie.name}
                </Typography>
                <Typography className='city' variant="body1">
                    {movie.description}
                </Typography>
            </div>
            <div className='stats'>
                <Typography className='eventText' variant="body2">
                    {movie.classification}
                </Typography>
            </div>
            <div className='buttonDelete' onClick={() => openDialogUpdate(movie)}>
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
                            <input type="text" name="name" placeholder="Name" onChange={handleChangeUpdate} value={updateMovie.name}></input>
                            </div>
                            <div className='dialogCInput'>
                                <input type="text" name="description" placeholder="City" onChange={handleChangeUpdate} value={updateMovie.description}></input>
                            </div>
                            <div className='dialogCInput'>
                                <input type="text" name="classification" placeholder="Ticket price" onChange={handleChangeUpdate} value={updateMovie.classification}></input>
                            </div>
                        </DialogContent>
                        <DialogActions>
                        <Button onClick={() => setOpen(false)}
                                color="primary" autoFocus>
                            Close
                        </Button>
                        <Button onClick={() => {
                     axios.put('http://localhost:4000/updateMovie/' + movie._id, updateMovie)
                     alert("Movie Update")
                     setOpen(false)
                     console.log(`Movie with id ${movie._id} updated`)
                        }}
                                color="primary" autoFocus>
                            Update
                        </Button>
                        </DialogActions>
                    </Dialog>
                    <Dialog className='dialogC' open={deleteMovie} onClose={() => setDelete(false)} PaperProps={{
                    style: {
                        backgroundColor: "rgb(46, 46, 46)",
                        color: 'white',
                    },
                    }}>
                        <DialogTitle>{"Are you sure you want to delete this Movie?"}</DialogTitle>
                        <DialogActions>
                        <Button onClick={() => setDelete(false)}
                                color="primary" autoFocus>
                            No
                        </Button>
                        <Button onClick={() => {
                             axios.delete('http://localhost:4000/deleteMovie/' + movie._id)
                             alert('Movie Deleted')
                             console.log(`Delete Movie with id ${movie._id}`)
                        }}
                                color="primary" autoFocus>
                            Yes
                        </Button>
                        </DialogActions>
                    </Dialog>
    </div>))}
        
    </div>
    
);
}

export default MovieCard;