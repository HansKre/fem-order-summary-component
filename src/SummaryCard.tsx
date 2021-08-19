import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import heroImg from './images/illustration-hero.svg';
import musicIcon from './images/icon-music.svg';
import {Grid} from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
    center: {
        textAlign: "center"
    },
    order: {
        backgroundColor: "ghostwhite"
    },
    bold: {
        fontWeight: "bold"
    },
    cardContent: {
        backgroundColor: "white"
    }
});

export default function SummaryCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={heroImg}
                    title="Contemplative Reptile"
                />
                <CardContent className={classes.cardContent} >
                    <Typography gutterBottom variant="h5" component="h2">
                        Order Summary
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" className={classes.center}>
                        You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!
                    </Typography>
                    <Card className={classes.order}>
                        <CardContent>
                            <Grid container>
                                <Grid item xs={3} ><img src={musicIcon} alt="music-icon" /></Grid>
                                <Grid item xs={6}>
                                    <Typography className={classes.bold} >Annual Plan</Typography>
                                    <Typography>$59.99/year</Typography>
                                </Grid>
                                <Grid item container alignContent="center" xs={3}><a href="https://google.com"><Typography>Change</Typography></a></Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </CardContent>
            </CardActionArea>
            <CardActions>
                {/* //     <div className="attribution">
                    //       Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>.
                    //       Coded by <a href="#">Your Name Here</a>.
                    //     </div>
                    //   </div>
                    // </div> */}
                <Grid container direction="column"><Button size="small" variant="contained" color="primary">
                    Proceed to Payment
                </Button>
                    <Button size="small" color="primary">
                        Cancel Order
                    </Button></Grid>
            </CardActions>
        </Card>
    );
}
