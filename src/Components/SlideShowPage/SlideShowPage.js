/* eslint-disable radix */
/* eslint-disable react/prop-types */
import React from 'react';
import Button from '@material-ui/core/Button';
import { Link, withRouter } from 'react-router-dom';
import './SlideShowPage.css';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(2),
    },
    marginTop: '24%',
  },
}));

const getStepContent = (step) => {
  switch (step) {
    case 1:
      return (
        <div>
          <h1>Year 2013 to 2014</h1>
          <ul>
            <li>
              Memories:- Most Enjoyable life of college finish, completed BE(IT) start the strugal
              part of life. money problems so started the search the Job in IT companies
            </li>
            <li>Professional Life:- Just started Interenship in IT, worked on the Wordpress </li>
            <li>Company:- WebMaterix Technologies</li>
          </ul>
        </div>
      );
    case 2:
      return (
        <div>
          <h1>Year 2015</h1>
          <ul>
            <li>
              Memories:- 6th Month Interenship finish and looking job for some month and got job in
              Ezware Technologies
            </li>
            <li>professional Life:- Worked on Wordpress, Html, CSS part</li>
            <li>Company:-Ezware Technologies</li>
          </ul>
        </div>
      );
    case 3:
      return (
        <div>
          <h1>Year 2016</h1>
          <ul>
            <li>
              Memories:- I have to upgrade my self thats why I leran JavaScript and left the Ezware
              Technologies and got job in JustBe Tech Soft Company. Its very nice company in my life
              only Five people is there and we are working on sports level product. Also I leraned
              lots of think thats need to live a life
            </li>
            <li>
              Professional Life:- Worked on 1louve.com Product HTML, CSS, JavaScript, Angular JS and
              Inonic 1.0
            </li>
            <li>Company:-JustBe Tech Soft Pvt Ltd</li>
          </ul>
        </div>
      );
    case 4:
      return (
        <div>
          <h1>Year 2017</h1>
          <ul>
            <li>
              Memories:-I don not want to change JustBe tech soft company but I left because of
              money and some personal desisions of my life and I got Job in TCS, I learn there whats
              the reality of IT Life,Got so many Friends.
            </li>
            <li>
              Professional Life:-Worked on My Vodafone App thats on PlayStore Now using Ionic 1.0,
              Ionic 2.0 and Angular 2.0
            </li>
            <li>Company:-TCS on contract of Future Focus Info-Tech Pvt ltd </li>
          </ul>
        </div>
      );
    case 5:
      return (
        <div>
          <h1>Year 2018</h1>
          <ul>
            <li>
              Memories:-I want to do permenent of Tcs But I got good Offer from Persistent system so
              I left TCS and Join the persistent system{' '}
            </li>
            <li>Professional Life:- worked On SAS project using OpenUI and Angular 6</li>
            <li>Company:- Persistent System</li>
          </ul>
        </div>
      );
    case 6:
      return (
        <div>
          <h1>Year 2019 to 2020</h1>
          <ul>
            <li>
              Memories:-Good experience giving from persistent working on different differnt project
            </li>
            <li>Professional Life:-Worked on React Js in Avni Project</li>
            <li>Company:- Persistent System</li>
          </ul>
        </div>
      );
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

  // const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setActiveStep(newValue + 1);
  };

  return (
    <div>
      <div className="navBackground">
        <Tabs
          value={activeStep - 1}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab component={Link} to="/slides/1" label="2013 to 2014" />
          <Tab component={Link} to="/slides/2" label="2015" />
          <Tab component={Link} to="/slides/3" label="2016" />
          <Tab component={Link} to="/slides/4" label="2017" />
          <Tab component={Link} to="/slides/5" label="2018" />
          <Tab component={Link} to="/slides/6" label="2019 to 2020" />
        </Tabs>
      </div>

      <div className="slides">
        <div>
          <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
        </div>
        <div className={classes.root}>
          <Button
            variant="contained"
            size="small"
            onClick={handleBack}
            disabled={activeStep === 1}
            component={Link}
            to={`/slides/${activeStep - 1}`}
          >
            Previous
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={handleNext}
            disabled={activeStep === 6}
            component={Link}
            to={`/slides/${activeStep + 1}`}
          >
            Next
          </Button>

          <Button variant="contained" color="primary" size="small" component={Link} to="/home">
            Back
          </Button>
        </div>
      </div>
    </div>
  );
}

export default withRouter(SlideShowPage);
