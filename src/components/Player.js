import React, { PureComponent } from 'react';
import propTypes from "prop-types";
import Counter from './Counter'

class Player extends PureComponent {
  static propTypes = {
    changeScore: propTypes.func,
    removePlayer: propTypes.func,
    name: propTypes.string,
    id: propTypes.number,
    score: propTypes.number,
    index: propTypes.number,
  };

  render() {
    const {
      name,
      id,
      score,
      index,
      removePlayer,
      changeScore
    } = this.props;
    return (
      <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
        { name }
      </span>

        <Counter score={score} changeScore={changeScore} index={index}/>
      </div>
    );
  }
}

export default Player;
