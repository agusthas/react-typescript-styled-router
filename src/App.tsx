import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyles from './globalStyles';
import { Navbar } from './components';

const App: React.FC = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <GlobalStyles />
      <Navbar />
    </Router>
  );
};

export default App;
