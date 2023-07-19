import React from 'react';
import Card from 'react-bootstrap/Card';

function Player({ name, team, nationality, jerseyNumber, age, urlImage }) {
   /* Player component 
  props: name, team, nationality, jerseyNumber, age, and urlImage of a player */

  return (
    // Card component to display player information using props passed from the player component
    <Card style={{ width: '18rem', backgroundColor: '#f5f5f5', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
      <div style={{ height: '200px', overflow: 'hidden' }}>
        <Card.Img variant="top" src={urlImage} style={{ borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }} />
      </div>
      <Card.Body className="text-center">
        <Card.Title >{name}</Card.Title>
        <Card.Text>
          <p><strong>Team:</strong> {team}</p>
          <p><strong>Nationality:</strong> {nationality}</p>
          <p><strong>Jersey Number:</strong> {jerseyNumber}</p>
          <p><strong>Age:</strong> {age}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Player;