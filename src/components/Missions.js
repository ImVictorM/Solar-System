import React, { Component } from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends Component {
  render() {
    const missionList = missions.map((mission) => {
      const { name, year, country, destination } = mission;
      return (<MissionCard
        name={ name }
        year={ year }
        country={ country }
        destination={ destination }
        key={ name }
      />);
    });
    return (
      <div>
        <Title headline="Missões" />
        <div data-testid="missions" className="mission-container">{missionList}</div>
      </div>
    );
  }
}

export default Missions;
