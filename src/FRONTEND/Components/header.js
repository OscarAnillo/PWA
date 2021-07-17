import {} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    divStyle: {
        background: 'linear-gradient(to bottom, #111, #fff)',
        [theme.breakpoints.up('sm')]: {
            display:'flex',
            justifyContent: 'space-around',
            alignItems: 'center'
        }
    },
    navStyle: {
        padding: '1em 0',
        
    },
    ulStyle: {
        [theme.breakpoints.up('sm')]: {
            display:'flex',
            justifyContent: 'space-around',
            alignItems: 'center'
        }
    },
    ilStyle: {
        margin: '1em 0',
        color: '#fff',
        textTransform: 'uppercase',
        letterSpacing: 3,
        listStyle:'none',
        [theme.breakpoints.up('sm')]: {
            marginLeft: '1em'
        }
        
    },
    lastStyle: {
        marginBottom: '1em'
    }
}))

export default function Header(){
    const classes = useStyles();
    return (
        <div className={classes.divStyle}>
            <div>
                <h1>Oscar</h1>
            </div>
            <nav className={classes.navStyle}>
                <ul className={classes.ulStyle}>
                    <li className={classes.ilStyle}>Guerlain</li>
                    <li className={classes.ilStyle}>Dior</li>
                    <li className={classes.ilStyle}>Chanel</li>
                </ul>
            </nav>
            <div className={classes.lastStyle}>
                <h1>Anillo</h1>
            </div>
        </div>
    )
}