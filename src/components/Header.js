import React from 'react';
import propTypes from "prop-types";
import Stats from './Stats';
import StopWatch from './StopWatch';

const Header = ({ players, title }) => {
  return (
    <header>
      <Stats players={players}/>
      <h1>{ title }</h1>
      <StopWatch/>
    </header>
  );
};

Header.propTypes = {
  players: propTypes.arrayOf(propTypes.object),
  title: propTypes.string,
};

Header.defaultProps = {
  title: 'Scoreboard'
};

export default Header;
