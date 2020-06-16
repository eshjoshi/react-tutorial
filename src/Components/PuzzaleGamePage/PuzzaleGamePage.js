import React from 'react';
import './PuzzaleGamePage.css';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import ImagePage from './Image';
import TilesData from './TilesData';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    width: 500,
    height: 500,
  },
  gridList: {
    width: '100%',
    height: '100%',
  },
}));

function PuzzaleGamePage() {
  const classes = useStyles();
  const degree = [90, 180, 270, 0, 360];
  const randomDegree = degree[Math.floor(Math.random() * degree.length)];
  const [scramble, setScramble] = React.useState(randomDegree - 90);
  const onClickScramble = () => {
    setScramble(randomDegree);
  };
  const onClickHelp = () => {};

  return (
    TilesData && (
      <div className="header">
        <GridList cellHeight={160} className={classes.root} cols={5}>
          {TilesData.map((tile) => (
            <GridListTile
              key={tile.id}
              cols={5}
              style={{
                width: 100,
                height: 100,
                padding: 0,
                transform: `rotate(${scramble - tile.deg}deg)`,
              }}
            >
              <ImagePage src={tile.img} alt={tile.tittle} deg={scramble - tile.deg} />
            </GridListTile>
          ))}
        </GridList>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          className="buttonSpacing"
        >
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={() => onClickScramble()}
          >
            Scramble
          </Button>
          <Button variant="contained" color="primary" size="small" onClick={() => onClickHelp()}>
            Help
          </Button>
          <Button variant="contained" color="primary" size="small" component={Link} to="/home">
            Back
          </Button>
        </Grid>
      </div>
    )
  );
}

export default PuzzaleGamePage;
