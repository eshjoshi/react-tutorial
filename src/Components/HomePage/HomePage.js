import React from 'react';
import './HomePage.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function HomePage() {
  const classes = useStyles();
  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item xs={4}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://spin.atomicobject.com/wp-content/uploads/20181229133335/journey-to-developer.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Journey from College
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Included some professional and enjoyable moment.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              <Link to={`/slides/${1}`}>Show</Link>
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://d13qmi8c46i38w.cloudfront.net/media/UCPthyssenkruppBAMXUK/assets.files/used-images/calculator_image_w2000_h670.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Calculater
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Included addition subtraction, division, multiplication, Equal and Clear
                functionality.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              <Link to="/calculator">Show</Link>
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://cdn.thewirecutter.com/wp-content/uploads/2020/03/puzzle-lowres-2x1--1024x512.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Puzzale Game
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                you have to clickon tile to rotate it anti-clockwise by 90 degrees
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              <Link to="/puzzale">Show</Link>
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}

export default HomePage;
