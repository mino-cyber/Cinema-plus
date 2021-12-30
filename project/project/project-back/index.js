const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
let path = require('path');

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

//connect to mongoBD

mongoose.connect("mongodb+srv://Ehab:Ehab2000@cluster0.9o5u6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB connected")
})

//upload Images

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, '../project-front/public/images/');
    },
    filename: function(req, file, cb) {   
        cb(null, req.body.name + path.extname(file.originalname));
    }
});

const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if(allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

let upload = multer({storage, fileFilter});

const storage2 = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, '../project-front/public/uploads/');
    },
    filename: function(req, file, cb) {   
        cb(null, req.body.name + path.extname(file.originalname));
    }
});

const fileFilter2 = (req, file, cb) => {
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if(allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

let upload2 = multer({storage: storage2, fileFilter: fileFilter2});

//Schema

const userSchema = mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    phone: String,
    password: String,
    block: Boolean
})

const cinemaSchema = mongoose.Schema({
    name: String,
    city: String,
    ticketPrice: String,
    numberOfSeats: String,
    photo: String,
})

const movieSchema = mongoose.Schema({
    name: String,
    description: String,
    classification: String,
    photo: String,
})

//data model

const User = new mongoose.model("User", userSchema)

const Cinema = new mongoose.model("cinema", cinemaSchema)

const Movie = new mongoose.model("movie", movieSchema)

// read data

app.get("/getUsers", (req, res) => {
    User.find({}, (err, user) => {
        if(err) console.warn(err)
        res.json(user)
    })
})

app.get("/getCinemas", (req, res) => {
    Cinema.find({}, (err, cinemas) => {
        if(err) console.warn(err)
        res.json(cinemas)
    })
})

app.get("/getMovies", (req, res) => {
    Movie.find({}, (err, movies) => {
        if(err) console.warn(err)
        res.json(movies)
    })
})

//Add Data
app.post("/login", (req, res) => {
    const {emailLogin, passwordLogin} = req.body
    User.findOne({email: emailLogin}, (err, user) => {
        if(user){
            if(passwordLogin === user.password){
                if(user.block){
                    res.send({message: "This account is blocked", user: user})
                }else{
                res.send({message: "Login Successfully", user: user})
                }
            }else{
                res.send({message: "Password didn't match"})
            }
        }else{
            res.send({message: "User not registered"})
        }
    })
})

app.post("/register", (req, res) => {
    const {first_name, last_name, email, phone, password, block} = req.body
    User.findOne({email: email}, (err, user) => {
        if(user){
            res.send({message: "User already registered"})
        }else{
            const user = new User({
                first_name,
                last_name,
                email,
                phone,
                password,
                block,
            })
            user.save(err => {
                if(err){
                    res.send(err)
                }else{
                    res.send({message: "Successfully Registered, please login now!"})
                }
            })
        }
    })
})


app.post("/addCinema", upload.single('photo'), (req, res) => {
    const {name, city, ticketPrice, numberOfSeats} = req.body
    const photo = req.file.filename
    Cinema.findOne({name: name}, (err, cinema) => {
        if(cinema){
            res.send({message: "Cinema already existing"})
        }else{
            const cinema = new Cinema({
                name,
                city,
                ticketPrice,
                numberOfSeats,
                photo
            })
            cinema.save(err => {
                if(err){
                    res.send(err)
                }else{
                    res.send({message: "Successfully Add Cinema"})
                }
            })
        }
    })
})



app.post("/addMovie", upload2.single('photo'), (req, res) => {
    const {name, description, classification} = req.body
    const photo = req.file.filename
    Movie.findOne({name: name}, (err, movie) => {
        if(movie){
            res.send({message: "Movie already existing"})
        }else{
            const movie = new Movie({
                name,
                description,
                classification,
                photo
            })
            movie.save(err => {
                if(err){
                    res.send(err)
                }else{
                    res.send({message: "Successfully Add Movie"})
                }
            })
        }
    })
})

//delete
app.delete("/deleteCinema/:id", (req, res) => {
    const id = req.params.id

    Cinema.findByIdAndDelete({_id: id}, (req,res,err) => {
        if(!err){
            console.log("Cinema Delete")
        }else{
            console.log(err)
        }
    })
})

app.delete("/deleteMovie/:id", (req, res) => {
    const id = req.params.id

    Movie.findByIdAndDelete({_id: id}, (req,res,err) => {
        if(!err){
            console.log("Movie Delete")
        }else{
            console.log(err)
        }
    })
})

//Update
app.put("/updateCinema/:id", (req, res) => {
    Cinema.findByIdAndUpdate({_id: req.params.id}, req.body, function (err, cinema) {
        if (err) return next(err);
        res.json(cinema);
    });
})

app.put("/updateMovie/:id", (req, res) => {
    Movie.findByIdAndUpdate({_id: req.params.id}, req.body, function (err, movie) {
        if (err) return next(err);
        res.json(movie);
    });
})

app.listen(4000, () => {
    console.log("BE started at port 4000")
})