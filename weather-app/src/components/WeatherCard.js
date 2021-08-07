
import React from 'react';
import { Card } from 'react-bootstrap';

const WeatherCard = ({ dt, temp_min, temp_max, main, icon }) => {
  const date = new Date(dt);

   convertToCels = (temp_min) => {
    console.log(temp_min);
    return (fahrenheit - 32) * 5 / 9
  }
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img
        variant="top"
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
      />
      <Card.Body>
        <Card.Title>{main}</Card.Title>
        <p>
          {date.toLocaleDateString()} - {date.toLocaleTimeString()}
        </p>
        <p>Min:1</p>
        <p>Max: 2</p>
      </Card.Body>
    </Card>
  );
};

export default WeatherCard;