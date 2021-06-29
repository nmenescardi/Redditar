import React from 'react';
import Navbar from '../navbar/Navbar';
import CardList from '../card/CardList';
import DismissAll from '../extra/DismissAll';
import { connect } from 'react-redux';
import { isSidebarOpen } from '../../store/posts/selector';

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
  sidebarOpen: isSidebarOpen(state),
});
export default connect(mapStateToProps)(Sidebar);
