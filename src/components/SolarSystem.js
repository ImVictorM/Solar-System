import React, { Component } from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends Component {
  render() {
    const planetList = planets.map((planet) => {
      const { name, image } = planet;
      return <PlanetCard key={ name } planetName={ name } planetImage={ image } />;
    });
    return (
      <div>
        <Title headline="Planetas" />
        <div data-testid="solar-system" className="solar-system">
          {planetList}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
