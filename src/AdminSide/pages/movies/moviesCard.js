import React from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { EventSeat, AttachMoney } from '@material-ui/icons';
import './movies.css'

const UseStylesMovie = makeStyles(theme => ({
    total: {
        margin: '15px',
        width: '30%',
        display: "inline-block",
    },

    root: {
        paddingBottom: theme.spacing(2),
        cursor: 'pointer',
        backgroundColor: 'rgb(46, 46, 46)',
        color: '#fff',
    },

    imageWrapper: {
        height: '200px',
        margin: '0 auto',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },

    image: {
        width: '100%',
        height: '100%',
        'object-fit': 'cover'
    },

    details: { padding: theme.spacing(3) },

    name: {
        fontSize: '18px',
        lineHeight: '21px',
        marginTop: theme.spacing(2),
        textTransform: 'capitalize',
        color: '#fff'
    },

    city: {
        lineHeight: '16px',
        height: theme.spacing(4),
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        color: theme.palette.text.secondary,
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(2),
        color: '#fff'
    },

    stats: {
        display: 'flex',
        alignItems: 'center',
        paddingTop: theme.spacing(1),
        paddingLeft: theme.spacing(3),
        color: '#fff'
    },

    eventIcon: {
        color: theme.palette.text.secondary,
        color: '#fff'
    },

    eventText: {
        marginLeft: theme.spacing(1),
        color: theme.palette.text.secondary,
        color: '#fff',
    },
}));

function moviesCard(props) {
const classes = UseStylesMovie(props);
const { className, movie } = props;
const movieImage =
movie && movie.image
? movie.image
: 'https://source.unsplash.com/featured/?movie';

const rootClassName = classNames(classes.root, className);
return (
    <div className={classes.total}>
        <div className={rootClassName}>
            <div className={classes.imageWrapper}>
                <img alt="movie" className={classes.image} src={movieImage} />
            </div>
            <div className={classes.details}>
                <Typography className={classes.name} variant="h4">
                    {movie.name}
                </Typography>
                <Typography className={classes.city} variant="body1">
                    {movie.city}
                </Typography>
            </div>
            <div className={classes.stats}>
                <AttachMoney className={classes.eventIcon} />
                <Typography className={classes.eventText} variant="body2">
                    {movie.ticketPrice} <span>&euro;</span> per movie
                </Typography>
            </div>
            <div className={classes.stats}>
                <EventSeat className={classes.eventIcon} />
                <Typography className={classes.eventText} variant="body2">
                    {movie.seatsAvailable} seats Available
                </Typography>
            </div>
            {true? <div className='delete'>
                Delete
            </div> : <div></div>}
        </div>
    </div>
);
}

export default moviesCard;