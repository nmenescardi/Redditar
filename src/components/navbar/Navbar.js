import React from 'react';
import { connect } from 'react-redux';
import { layoutToggleSidebar } from '../../store/posts/actions';

const Navbar = ({ layoutToggleSidebar }) => {
  return (
    <section className="navbar" onClick={layoutToggleSidebar}>
      <div className="navbar__menu">
        <div className="navbar__bar"></div>
        <div className="navbar__bar"></div>
        <div className="navbar__bar"></div>
      </div>
      <h1 className="navbar__title">Redditar</h1>
    </section>
  );
};

const mapDispatchToProps = {
  layoutToggleSidebar,
};
export default connect(null, mapDispatchToProps)(Navbar);