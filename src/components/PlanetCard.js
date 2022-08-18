import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;
    const planetDescription = `Planeta ${planetName}`;
    return (
      <div data-testid="planet-card" className="planet-card">
        <p data-testid="planet-name">
          {planetName}
        </p>
        <img src={ planetImage } alt={ planetDescription } />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
