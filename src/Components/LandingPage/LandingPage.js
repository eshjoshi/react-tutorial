import React from 'react';
import './LandingPage.css';
import { Link } from 'react-router-dom';

function LandingPage() {
  const [message, setMessage] = React.useState('Welcome to Webiste');
  React.useEffect(() => {
    setTimeout(() => {
      setMessage('Thank`s for coming here');
    }, 3000);
  });
  return (
    <div className="landingPage">
      <div className="header">
        {message}
        <Link className="link" to="/home">
          Home Page
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
