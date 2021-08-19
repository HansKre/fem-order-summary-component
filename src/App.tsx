import {Grid} from '@material-ui/core';
import SummaryCard from './SummaryCard';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
  fullHeight: {
    height: "100vh"
  },
});

function App() {
  const classes = useStyles();
  return (
    <Grid container justifyContent="center" alignItems="center" className={classes.fullHeight}>
      <SummaryCard />
    </Grid>
  );
}

export default App;
