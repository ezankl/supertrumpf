import React from 'react';
import PropTypes from 'prop-types';

import './Game.css';
import Card from './Card';

export default function Game({
  title,
  playersTurn,
  player,
  computer,
  selectedProperty,
  computerUncovered,
  play
}) {
  return (
    <div>
      <h1>{title}</h1>
      <div className="info">{playersTurn ? 'Du bist' : 'Der Computer ist'} an der Reihe</div>
      <div className="cards">
        {player[0] && (
          <Card
            animal={player[0]}
            uncovered={true}
            selectedProperty={selectedProperty}
            onSelectProperty={play}
          />
        )}
        {computer[0] && (
          <Card
            animal={computer[0]}
            uncovered={computerUncovered}
            selectedProperty={selectedProperty}
          />
        )}
      </div>
    </div>
  );
}

Game.propTypes = {
  title: PropTypes.string.isRequired,
  playersTurn: PropTypes.bool.isRequired,
  player: PropTypes.array.isRequired,
  computer: PropTypes.array.isRequired,
  selectedProperty: PropTypes.string.isRequired,
  computerUncovered: PropTypes.bool.isRequired,
  play: PropTypes.func.isRequired
};
