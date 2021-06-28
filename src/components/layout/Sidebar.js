import React from 'react';
import Navbar from '../navbar/Navbar';
import CardList from '../card/CardList';
import DismissAll from '../extra/DismissAll';

const Sidebar = () => {
  return (
    <section className="sidebar sidebar--open">
      <Navbar />
      <CardList />
      <DismissAll />
    </section>
  );
};

export default Sidebar;
