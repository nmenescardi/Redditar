import React from 'react';
import Navbar from '../navbar/Navbar';
import CardList from '../card/CardList';
import DismissAll from '../extra/DismissAll';
import { connect } from 'react-redux';
import { isSidebarOpen } from '../../store/posts/selector';
import { Store } from '../../types';

type Props = {
  sidebarOpen: boolean;
};

const Sidebar: React.FC<Props> = ({ sidebarOpen }) => {
  return (
    <section className={`sidebar ${sidebarOpen ? 'sidebar--open' : null} `}>
      <Navbar />
      <CardList />

      <DismissAll className="sidebar__dismiss-all" />
    </section>
  );
};

const mapStateToProps = (state: Store) => ({
  sidebarOpen: isSidebarOpen(state),
});
export default connect(mapStateToProps)(Sidebar);
