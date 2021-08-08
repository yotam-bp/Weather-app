import React from 'react';
import { Card } from 'react-bootstrap';
import classes from '../styles/WeatherCard.module.css'
const WeatherCard = ({ dt, temp_min, temp_max, main, icon }) => {
  const date = new Date(dt);

  function shortTemp(temp) {
    return new String(temp).substring(0,2) 
  }
  
  return (
    <div className={classes.Card}>
      <Card.Img
        variant="top"
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
      />
      <Card.Body>
        <p>
          <span style={{ fontSize: '1rem', fontWeight: '500' }}>
            {date.toLocaleTimeString()}
          </span>
          <br />
          {date.toLocaleDateString()}
        </p>
        <p>Min: {shortTemp(temp_min)}</p>
        <p>Max: {shortTemp(temp_max)}</p>
      </Card.Body>
    </div>
  );
};
export default WeatherCard;
