import React from 'react';
import Sidebar from './Sidebar';
import Home from './Home';

const MainView = () => {
  return (
    <main className="main-view">
      <Sidebar />
      <Home />
    </main>
  );
};

export default MainView;
