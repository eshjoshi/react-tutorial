import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import './SlideShowPage.css';
import { makeStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
// import {KeyboardArrowLeft, KeyboardArrowRight} from '@material-ui/icons';

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    flexGrow: 1,
  },
});

function SlideShowPage() {
  const [page, setPage] = React.useState('Journey from college');
  const nextStep = () => {
    setPage('Next pahge come');
  };
  const previousStep = () => {
    setPage('Journey from college');
  };

  const classes = useStyles();
  // const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  return (
    <div>
      <div className="page">{page}</div>
      <div>
        <Link to={`/slides/${0}`}>
          <Button variant="contained" onClick={previousStep}>
            {' '}
            Previous
          </Button>
        </Link>
        <Link to={`/slides/${1}`}>
          <Button variant="contained" color="primary" onClick={nextStep}>
            Next
          </Button>
        </Link>
        <Link to="/stepper"> Steeper</Link>
      </div>

      <MobileStepper
        variant="dots"
        steps={6}
        position="static"
        activeStep={activeStep}
        className={classes.root}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === 5}>
            Next
            {/* {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />} */}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {/* {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />} */}
            Back
          </Button>
        }
      />
    </div>
  );
}

export default SlideShowPage;
