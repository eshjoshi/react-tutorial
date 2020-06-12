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
  root: {},
  media: {
    height: 140,
  },
  spacing: {
    padding: '2%',
  },
});

function HomePage() {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="row"
      className={classes.spacing}
      justify="flex-start"
      alignItems="flex-start"
      item
      xs={12}
    >
      <Grid item xs={4} className={classes.spacing}>
        <Card>
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
                Included some professional life, updated skills and enjoyable moment.
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
      <Grid item xs={4} className={classes.spacing}>
        <Card>
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
      <Grid item xs={4} className={classes.spacing}>
        <Card>
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
      <Grid item xs={4} className={classes.spacing}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://cdn.i-scmp.com/sites/default/files/styles/1200x800/public/d8/images/methode/2020/01/14/90c5e516-368b-11ea-9933-e21be988cd59_image_hires_185803.jpg?itok=Y_bHQHKH&v=1578999489"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Banking Website
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Api building in banking site and vertual ATM
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              <Link to="/loginPage">Show</Link>
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}

export default HomePage;
