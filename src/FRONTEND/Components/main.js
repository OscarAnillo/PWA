import {useEffect, useRef } from 'react';
/* Data */
import data from '../Data/data.json'

/* Material - UI */
import { Card, CardHeader, CardMedia, CardContent, IconButton, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

/* Icons */
import {AiOutlineHeart} from 'react-icons/ai';

/* GSAP */
import {gsap} from 'gsap'

    const useStyles = makeStyles(theme => ({
        divStyle: {
            width: '90%',
            margin: 'auto',
            [theme.breakpoints.up('sm')]: {
                display: 'inline-block',
                width: '25%',
                margin: '.8em'
            }
        },
        cardStyle: {
            width: '100%',
            height: 600,
            margin: 'auto',
            [theme.breakpoints.up('sm')]: {
                height: 760
            }
            
        },
        cardImage: {
            width: '100%',
            height: 380,
            margin: 'auto',
            [theme.breakpoints.up('sm')]: {
                height: 560
            }
        }
    }))

    export default function Main(){
        const classes = useStyles();
        const divRef = useRef(null);

        useEffect(() => {
            gsap.fromTo(divRef.current, {opacity: 0, y: -500, duration: 1.5}, {opacity: 1, y: 0, duration: 1.5})
        }, [])

        return (
            <div ref={divRef}>
            {data.map(item => (
                <div className={classes.divStyle} key={item.id}>    
                    <Card variant="outlined" elevation={3} className={classes.cardStyle}>
                        <CardHeader title={item.brand} subheader={item.perfume}/>
                        <CardMedia image={item.image} className={classes.cardImage}/>
                        <CardContent><Typography variant="body2">{item.text}</Typography></CardContent>
                        <IconButton>
                            <Button><AiOutlineHeart />like</Button>
                        </IconButton>
                    </Card>
                </div>
            ))}
            </div>
        )
    }