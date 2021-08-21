import {makeStyles, ThemeProvider} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import heroImg from './images/illustration-hero.svg';
import musicIcon from './images/icon-music.svg';
import {Grid} from '@material-ui/core';
import {createTheme} from '@material-ui/core/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: "#382ae1",
        },
        secondary: {
            main: "#6e7693"
        },
    },
});

const useStyles = makeStyles((theme) => ({
    card: {
        maxWidth: 330,
        height: "78.5vh",
        "&.MuiPaper-rounded": {
            borderRadius: "20px"
        }
    },
    heroImg: {
        height: 160,
    },
    h5: {
        textAlign: "center",
        marginTop: "15px"
    },
    description: {
        textAlign: "center",
        marginBottom: "16px",
        lineHeight: 1.6,
        fontSize: "15px",
        marginTop: "8px",
    },
    order: {
        backgroundColor: "ghostwhite",
        borderRadius: "12px",
        marginTop: "7px"
    },
    orderFont: {
        fontSize: "14px",
    },
    bold: {
        fontWeight: "bold"
    },
    cardContent: {
        backgroundColor: "white",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        paddingLeft: "40px",
        paddingRight: "40px",
    },
    gridContainer: {
        height: "100%",
    },
    grow: {
        flex: 1
    },
    button: {
        paddingTop: "14px",
        paddingBottom: "14px",
        marginLeft: "16px",
        marginRight: "16px",
        borderRadius: "10px",
    },
    buttonPrimary: {
        boxShadow: "0 23px 24px -11px rgb(63 81 181 / 50%)",
    },
    buttonSecondary: {
        marginTop: "10px",
    },
    link: {
        color: theme.palette.primary.main,
        fontSize: "13px",
    },
    orderMarginTopBottom: {
        marginTop: "20px",
        paddingTop: "0px",
        "&.MuiCardContent-root:last-child": {
            paddingBottom: "0px"
        },
        marginBottom: "12px",
    },
    lightFontColor: {
        color: "cadetblue"
    },
    marginLeft: {
        marginLeft: "10px",
    },
    buttonsContainer: {
        paddingTop: 0,
        marginTop: "-2px",
    }
}));

export default function SummaryCard() {
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <Card className={classes.card} elevation={6} >
                <CardMedia
                    className={classes.heroImg}
                    image={heroImg}
                    title="Contemplative Reptile"
                />
                <Grid container direction="column" className={classes.gridContainer}>
                    <Grid item className={classes.grow}>
                        <CardContent className={classes.cardContent} >
                            <Typography className={`${classes.h5} ${classes.bold}`} gutterBottom variant="h5" component="h2">
                                Order Summary
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p" className={classes.description}>
                                You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!
                            </Typography>
                            <Card className={classes.order} elevation={0}>
                                <CardContent className={classes.orderMarginTopBottom}>
                                    <Grid container alignItems="center">
                                        <Grid item xs={3} ><img src={musicIcon} alt="music-icon" /></Grid>
                                        <Grid item xs={6}>
                                            <Typography className={`${classes.orderFont} ${classes.marginLeft} ${classes.bold}`} >Annual Plan</Typography>
                                            <Typography className={`${classes.orderFont} ${classes.marginLeft} ${classes.lightFontColor}`}>$59.99/year</Typography>
                                        </Grid>
                                        <Grid item container alignContent="center" xs={3}>
                                            <a
                                                href="https://google.com"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <Typography className={`${classes.link} ${classes.bold} ${classes.marginLeft} ${classes.bold}`}>Change</Typography>
                                            </a>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </CardContent>
                    </Grid>
                    <Grid item className={classes.grow}>
                        <CardActions className={classes.buttonsContainer}>
                            <Grid container direction="column">
                                <Button
                                    size="small"
                                    variant="contained"
                                    color="primary"
                                    className={`${classes.button} ${classes.buttonPrimary} ${classes.bold}`}
                                >
                                    Proceed to Payment
                                </Button>
                                <Button
                                    size="small"
                                    color="secondary"
                                    className={`${classes.button} ${classes.buttonSecondary} ${classes.bold}`}
                                >
                                    Cancel Order
                                </Button>
                            </Grid>
                        </CardActions>
                    </Grid>
                </Grid>
            </Card>
        </ThemeProvider>
    );
}
