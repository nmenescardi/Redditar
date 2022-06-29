import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './utils/Routes';

const Redditar: React.FC = () => {
  return (
    <Router>
      <div className="Redditar">
        <Routes />
      </div>
    </Router>
  );
};
export default Redditar;
