import React from 'react';
import './PuzzaleGamePage.css';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Image from 'material-ui-image';
import { connect } from 'react-redux';
import ImagePage from './Image';
import TilesData from './TilesData';
import e from '../../Assets/elbow1.png';
import t from '../../Assets/tee1.png';
import o from '../../Assets/source1.png';
import s from '../../Assets/straight1.png';
import c from '../../Assets/cap1.png';
import { store } from './CreateStore';
// import { addData } from '../../Reducers/PuzzaleReducer';
import { setRotateData } from '../../Reducers/PuzzaleReducer';
import { withParams } from '../../utils/api';

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

function PuzzaleGamePage({ data, setRotateData }) {
  const classes = useStyles();

  const degree = [90, 180, 270, 0];
  const randomDegree = degree[Math.floor(Math.random() * degree.length)];
  const [scramble, setScramble] = React.useState(false);

  console.log('inner app', data);
  const onClickScramble = () => {
    // setScramble(data - 90);
    console.log('inner scramble', data);
    setScramble(true);
    setRotateData(data + randomDegree);
  };

  // const onClickHelp = () => {};
  // const table = [
  //   [e, e, e, t, c],
  //   [s, t, e, e, e],
  //   [t, e, o, t, t],
  //   [s, e, s, e, c],
  //   [c, e, s, s, c],
  // ];
  // return (
  //   table && (
  //     <div className="header">
  //       <table>
  //         {table.map((tile) => (
  //           <tr>
  //             {tile.map((x) => (
  //               <th>
  //                 <ImagePage
  //                   src={x}
  //                   alt={x}
  //                   deg={scramble}
  //                   style={{
  //                     width: '100px',
  //                     height: '100px',
  //                     position: 'static',
  //                   }}
  //                 />
  //               </th>
  //             ))}
  //           </tr>
  //         ))}
  //       </table>
  //       {/*
  return (
    <div>
      <GridList cellHeight={160} className={classes.root} cols={5}>
        {TilesData.map((tile) => (
          <GridListTile
            key={tile.id}
            cols={5}
            style={{
              width: 100,
              height: 100,
              padding: 0,
              // transform: `rotate(${data}deg)`,
            }}
          >
            <ImagePage
              src={tile.img}
              alt={tile.tittle}
              deg={scramble ? tile.deg : data + tile.deg}
              scramble={scramble}
            />
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
        <Button variant="contained" color="primary" size="small" onClick={onClickScramble}>
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
  );
}

const mapStateToProps = (state) => ({
  data: state.puzzaleReducer.data,
});

const mapDispatchToProps = {
  setRotateData,
};

export default connect(mapStateToProps, mapDispatchToProps)(PuzzaleGamePage);

// export default PuzzaleGamePage;
