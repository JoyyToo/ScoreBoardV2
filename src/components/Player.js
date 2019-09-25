import React, { PureComponent } from 'react';
import propTypes from "prop-types";
import Counter from './Counter'
import Icon from './Icon';

class Player extends PureComponent {
  static propTypes = {
    changeScore: propTypes.func,
    removePlayer: propTypes.func,
    isHighScore: propTypes.bool,
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
      changeScore,
    } = this.props;
    return (
      <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
        <Icon isHighScore={this.props.isHighScore} />
        { name }
      </span>

        <Counter score={score} changeScore={changeScore} index={index}/>
      </div>
    );
  }
}

export default Player;
