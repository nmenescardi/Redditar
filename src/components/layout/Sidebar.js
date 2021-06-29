import React from 'react';
import Navbar from '../navbar/Navbar';
import CardList from '../card/CardList';
import DismissAll from '../extra/DismissAll';
import { connect } from 'react-redux';

const Sidebar = ({ sidebarOpen }) => {
  return (
    <section className={`sidebar ${sidebarOpen ? 'sidebar--open' : null} `}>
      <Navbar />
      <CardList />

      <DismissAll className="sidebar__footer" />
    </section>
  );
};

const mapStateToProps = (state) => ({
  sidebarOpen: state.posts.sidebarOpen,
});
export default connect(mapStateToProps)(Sidebar);
