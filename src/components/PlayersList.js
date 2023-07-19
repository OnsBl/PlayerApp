import React from 'react';
import Player from './Player';
import players from "../players.js";
import unknown from "../img/unknown.png";

//component of list of players 
function PlayersList() {

  // Inline style object for the grid layout 
  const containerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gridGap: '20px',
  };


  const centerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  };

  /* Create an array of Player components by mapping over the players array  
    and use "index" as the key prop for component identity 
     and render the array of Player components */
  return (
    <div style={centerStyle}>
      <div style={containerStyle}>
        {players.map((e, index) => (
          <Player key={index} {...e} />
        ))}
      </div>
    </div>
  );
}

// Default props for the Player component if information is not provided
Player.defaultProps = {
    name: "Player Name",
    team: "Unknown",
    nationality: "Unknown",
    jerseyNumber: 0,
    age: 0,
    urlImage: {unknown},
};

export default PlayersList;