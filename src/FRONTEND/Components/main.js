import {useEffect, useRef } from 'react';
/* Data */
import data from '../Data/data.json'

/* Material - UI */
import { Grid, Card, CardHeader, CardMedia, CardContent, CardActions, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

/* Icons */
import {AiOutlineHeart} from 'react-icons/ai';

/* GSAP */
import {gsap} from 'gsap'

    const useStyles = makeStyles(theme => ({
        cardStyle: {
            height: 600,
            [theme.breakpoints.up('sm')]: {
                height: 740,
            }
            
        },
        cardImage: {
            height: 390,
            [theme.breakpoints.up('sm')]: {
                height: 540,
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
                <Grid container justifyContent={"center"}>
                    {data.map(item => (
                            <Grid item xs={12} sm={4} md={3} key={item.id}>   
                                <Card variant="outlined" className={classes.cardStyle}>
                                    <CardHeader title={item.brand} subheader={item.perfume}/>
                                    <CardMedia image={item.image} className={classes.cardImage}/>
                                    <CardContent><Typography variant="body2">{item.text}</Typography></CardContent>
                                    <CardActions disableSpacing>
                                        <Button><AiOutlineHeart /></Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                    ))}
            </Grid>
            </div>
        )
    }