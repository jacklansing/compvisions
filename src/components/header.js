import PropTypes from 'prop-types';
import React from 'react';
import NavBar from './navbar';

const Header = ({ siteTitle, showSearch }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `0.45rem`,
    }}
  >
    <NavBar siteTitle={siteTitle} showSearch={showSearch} />
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
