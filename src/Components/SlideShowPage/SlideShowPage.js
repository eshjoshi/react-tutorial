/* eslint-disable radix */
/* eslint-disable react/prop-types */
import React from 'react';
import Button from '@material-ui/core/Button';
import { Link, withRouter } from 'react-router-dom';
import './SlideShowPage.css';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const getStepContent = (step) => {
  switch (step) {
    case 1:
      return (
        <div>
          <h1>Year 2013 to 2014</h1>
          <p>I have finish my College life its to enjoyable. start my profestional life </p>
        </div>
      );
    case 2:
      return 'Step 3: This is the bit I really care about!';
    case 3:
      return 'Step 1: Select campaign settings...';
    case 4:
      return 'Step 2: What is an ad group anyways?';
    case 5:
      return 'Step 3: This is the bit I really care about!';
    case 6:
      return 'Step 3: This is the bit I really care about!';
    default:
      return 'Unknown step';
  }
};

function SlideShowPage({ match }) {
  // console.log(props);
  const classes = useStyles();
  const pageNumber = parseInt(match.params.id);
  const [activeStep, setActiveStep] = React.useState(pageNumber);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  return (
    <div className="slides">
      <div>
        <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
      </div>
      <div className="button">
        <Link to={`/slides/${activeStep - 1}`}>
          <Button variant="contained" size="small" onClick={handleBack} disabled={activeStep === 1}>
            Previous
          </Button>
        </Link>
        <Link to={`/slides/${activeStep + 1}`}>
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={handleNext}
            disabled={activeStep === 6}
          >
            Next
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default withRouter(SlideShowPage);
