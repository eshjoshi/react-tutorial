import React, { useState } from 'react';
import './PuzzaleGamePage.css';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Elbow1 from '../../Assets/elbow1.png';
import Tee1 from '../../Assets/tee1.png';
import Source1 from '../../Assets/source1.png';
import Straight1 from '../../Assets/straight1.png';
import Cap1 from '../../Assets/cap1.png';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 500,
  },
}));

function PuzzaleGamePage() {
  const classes = useStyles();
  const [rotateImage, setRotateImage] = useState(null);
  const imageRotate = (event) => {
    console.log('Inner');
    if (event.target.alt == 0) {
      setRotateImage(90);
    } else if (event.target.alt == 90) {
      setRotateImage(180);
    } else if (event.target.alt == 180) {
      setRotateImage(270);
    } else if (event.target.alt === 270) {
      setRotateImage(0);
    }
  };

  const tileData = [
    {
      img: Elbow1,
      title: 'e1',
      deg: 90,
    },
    {
      img: Elbow1,
      title: 'e0',
      deg: 0,
    },
    {
      img: Elbow1,
      title: 'e1',
      deg: 90,
    },
    {
      img: Tee1,
      title: 't0',
      deg: 0,
    },
    {
      img: Cap1,
      title: 'c0',
      deg: 0,
    },
    {
      img: Straight1,
      title: 's1',
      deg: 90,
    },
    {
      img: Tee1,
      title: 't1',
      deg: 90,
    },
    {
      img: Elbow1,
      title: 'e3',
      deg: 270,
    },
    {
      img: Elbow1,
      title: 'e2',
      deg: 180,
    },
    {
      img: Elbow1,
      title: 'e0',
      deg: 0,
    },
    {
      img: Tee1,
      title: 't1',
      deg: 90,
    },
    {
      img: Elbow1,
      title: 'e3',
      deg: 270,
    },
    {
      img: Source1,
      title: 'o2',
      deg: 180,
    },
    {
      img: Tee1,
      title: 't0',
      deg: 0,
    },
    {
      img: Tee1,
      title: 't3',
      deg: 270,
    },
    {
      img: Straight1,
      title: 's1',
      deg: 90,
    },
    {
      img: Elbow1,
      title: 'e1',
      deg: 90,
    },
    {
      img: Straight1,
      title: 's0',
      deg: 0,
    },
    {
      img: Elbow1,
      title: 'e3',
      deg: 270,
    },
    {
      img: Cap1,
      title: 'c3',
      deg: 270,
    },
    {
      img: Cap1,
      title: 'c3',
      deg: 270,
    },
    {
      img: Elbow1,
      title: 'e2',
      deg: 180,
    },
    {
      img: Straight1,
      title: 's0',
      deg: 0,
    },
    {
      img: Straight1,
      title: 's0',
      deg: 0,
    },
    {
      img: Cap1,
      title: 'c0',
      deg: 0,
    },
  ];
  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={5}>
        {tileData.map((tile, index) => (
          <GridListTile
            key={index}
            cols={1}
            onClick={() => imageRotate(event)}
            style={{
              width: 100,
              height: 100,
              padding: 0,
              transform: `rotate(${rotateImage !== null ? rotateImage : tile.deg}deg)`,
            }}
          >
            <img src={tile.img} alt={tile.deg} style={{ width: 100, height: 100 }} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

export default PuzzaleGamePage;
