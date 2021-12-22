import React, {useState} from 'react';
import film from '../../../film.jpg';
import { Button } from '@material-ui/core';
import MoviesCard from './moviesCard'
import SearchIcon from "@material-ui/icons/Search";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import './movies.css'

const MoviesView = () => {
const movie = {image: film, name: 'film 1', city: 'Giza', ticketPrice: '50', seatsAvailable: '20', isDelete: false}
const [ isDelete, setDelete] = useState(false)

const [open, setOpen] = React.useState(false);

const handleClickToOpen = () => {
	setOpen(true);
};

const handleToClose = () => {
	setOpen(false);
};

const handleChange = e => {
    isDelete? setDelete({
        isDelete: false
    }) : setDelete ({
        isDelete: true
    })

    console.log(isDelete)
}

    return(
        <div className="cinema">
            <div className='row'>
                <div className='searchCinema'>
                    <SearchIcon style={{color: '#fff', display: 'inline-block'}}></SearchIcon>
                    <input type="text" name="cinema" placeholder="Search cinema" ></input>
                </div>
                <div>
                    <Button
                        style={{marginTop: '100px', marginRight: '10px'}}
                        color="primary"
                        size="small"
                        variant="outlined" onClick={handleChange}>
                            Delete
                    </Button>
                    <Button
                        style={{marginTop: '100px'}}
                        color="primary"
                        size="small"
                        variant="outlined" onClick={handleClickToOpen}>
                            Add
                    </Button>
                    <Dialog className='dialogC' open={open} onClose={handleToClose} PaperProps={{
                    style: {
                        backgroundColor: "rgb(46, 46, 46)",
                        color: 'white',
                    },
                    }}>
                        <DialogTitle>{"How are you?"}</DialogTitle>
                        <DialogContent>
                        <input type='file'></input>
                        <div className='dialogCInput'>
                            <input type="text" name="cinema" placeholder="Name" ></input>
                            </div>
                            <div className='dialogCInput'>
                                <input type="text" name="cinema" placeholder="Description" ></input>
                            </div>
                            <div className='dialogCInput'>
                                <input type="text" name="cinema" placeholder="Classification" ></input>
                            </div>
                            <div className='dialogCInputCheck'>
                                <input type="checkbox" id="topping" name="topping" value="cinema1" />cinema1
                                <input type="checkbox" id="topping" name="topping" value="cinema2" />cinema2
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
                </div>
            </div>
            <div className='viewCinema'>
                <MoviesCard movie={movie}/>
                <MoviesCard movie={movie}/>
                <MoviesCard movie={movie}/>
                <MoviesCard movie={movie}/>
                <MoviesCard movie={movie}/>
            </div>
        </div>
    )
}

export default MoviesView