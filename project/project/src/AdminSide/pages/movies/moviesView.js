import React, {useState, useEffect} from 'react';
import { Button } from '@material-ui/core';
import SearchIcon from "@material-ui/icons/Search";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import axios from "axios"
import './movies.css'
import MovieCard from './moviesCard'

const MoviesView = () => {
    const [open, setOpen] = React.useState(false);
    
    const [ addMovie, setAddMovie] = useState({
        name: "",
        description: "",
        classification: "",
        photo: ""
    })
    
    const handleChangeAddMovie = e => {
        const { name, value } = e.target
        setAddMovie({
            ...addMovie,
            [name]: value
        })
    }
    
    const handlePhoto = (e) => {
        setAddMovie({...addMovie, photo: e.target.files[0]});
    }
    
    const addMovieToDB = (e) => {
        e.preventDefault();
            const formData = new FormData();
            formData.append('name', addMovie.name);
            formData.append('description', addMovie.description);
            formData.append('classification', addMovie.classification);
            formData.append('photo', addMovie.photo);
    
        const{name, description, classification, photo} = addMovie
        if(name && description && classification && photo){
            axios.post("http://localhost:4000/addMovie", formData)
            .then( res => {
                alert(res.data.message)
                setOpen(false)
            })
        }else {
            alert("invlid input")
        }
    }
    
        return(
            <div className="Movie">
                <div className='rowMovies'>
                    <div className='searchMovies'>
                        <SearchIcon style={{color: '#fff', display: 'inline-block'}}></SearchIcon>
                        <input type="text" name="Movie" placeholder="Search Movie" ></input>
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
                    name="image"
                    onChange={handlePhoto}
                />
                            <div className='dialogCInput'>
                                <input type="text" name="name" placeholder="Enter Movie name" onChange={handleChangeAddMovie} value={addMovie.name}></input>
                                </div>
                                <div className='dialogCInput'>
                                    <input type="text" name="description" placeholder="Enter Description" onChange={handleChangeAddMovie} value={addMovie.description}></input>
                                </div>
                                <div className='dialogCInput'>
                                    <input type="text" name="classification" placeholder="Enter Classifiction" onChange={handleChangeAddMovie} value={addMovie.classification}></input>
                                </div>
                            </DialogContent>
                            <DialogActions>
                            <Button onClick={()=>setOpen(false)}
                                    color="primary" autoFocus>
                                Close
                            </Button>
                            <Button onClick={addMovieToDB}
                                    color="primary" autoFocus>
                                Add
                            </Button>
                            </DialogActions>
                        </Dialog>
                    </div>
                </div>
                <div className='viewMovies'>
                    <MovieCard/>
                </div>
            </div>
        )
    }

export default MoviesView