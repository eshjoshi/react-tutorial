import React from 'react';
import './PuzzaleGamePage.css';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
// import Image from 'material-ui-image';
// import Image from 'material-ui-image';
import Elbow1 from '../../Assets/elbow1.png';
import Tee1 from '../../Assets/tee1.png';
import Source1 from '../../Assets/source1.png';
import Straight1 from '../../Assets/straight1.png';
import Cap1 from '../../Assets/cap1.png';
import ImagePage from './Image';

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
  const tileData = [
    { id: 1, img: Elbow1, title: 'e1', deg: 90 },
    { id: 2, img: Elbow1, title: 'e0', deg: 0 },
    { id: 3, img: Elbow1, title: 'e1', deg: 90 },
    { id: 4, img: Tee1, title: 't0', deg: 0 },
    { id: 5, img: Cap1, title: 'c0', deg: 0 },
    { id: 6, img: Straight1, title: 's1', deg: 90 },
    { id: 7, img: Tee1, title: 't1', deg: 90 },
    { id: 8, img: Elbow1, title: 'e3', deg: 270 },
    { id: 9, img: Elbow1, title: 'e2', deg: 180 },
    { id: 10, img: Elbow1, title: 'e0', deg: 0 },
    { id: 11, img: Tee1, title: 't1', deg: 90 },
    { id: 12, img: Elbow1, title: 'e3', deg: 270 },
    { id: 13, img: Source1, title: 'o2', deg: 180 },
    { id: 14, img: Tee1, title: 't0', deg: 0 },
    { id: 15, img: Tee1, title: 't3', deg: 270 },
    { id: 16, img: Straight1, title: 's1', deg: 90 },
    { id: 17, img: Elbow1, title: 'e1', deg: 90 },
    { id: 18, img: Straight1, title: 's0', deg: 0 },
    { id: 19, img: Elbow1, title: 'e3', deg: 270 },
    { id: 20, img: Cap1, title: 'c3', deg: 270 },
    { id: 21, img: Cap1, title: 'c3', deg: 270 },
    { id: 22, img: Elbow1, title: 'e2', deg: 180 },
    { id: 23, img: Straight1, title: 's0', deg: 0 },
    { id: 24, img: Straight1, title: 's0', deg: 0 },
    { id: 25, img: Cap1, title: 'c0', deg: 0 },
  ];
  const [isScramble, setRotateImage] = React.useState(false);

  const onClickScramble = () => {
    setRotateImage(!isScramble);
  };
  const degree = [90, 180, 270, 0];
  const randomDegree = degree[Math.floor(Math.random() * degree.length)];

  return (
    tileData && (
      <div>
        <GridList cellHeight={160} className={classes.root} cols={5}>
          {tileData.map((tile) => (
            <GridListTile
              key={tile.id}
              cols={5}
              style={{
                width: 100,
                height: 100,
                padding: 0,
                transform: `rotate(${!isScramble ? tile.deg : randomDegree}deg)`,
              }}
            >
              <ImagePage src={tile.img} alt={tile.id} deg={tile.deg} />
            </GridListTile>
          ))}
        </GridList>
        <Button variant="contained" color="primary" onClick={() => onClickScramble()}>
          Scramble
        </Button>
        <Button variant="contained" color="primary" size="small" component={Link} to="/home">
          Back
        </Button>
      </div>
      // </div>
    )
  );
}

export default PuzzaleGamePage;
