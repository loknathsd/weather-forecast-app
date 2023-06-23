import React from 'react';

const WeatherInfo = ({ weather }) => {
  const { name, main, weather: weatherData } = weather;
  console.log(weather)

  // Get the current weekday and date
  const today = new Date();
  const options = { weekday: 'long', month: 'long', day: 'numeric' };
  const currentDate = today.toLocaleDateString('en-US', options);
  const temperatureCelsius = Math.round(main.temp - 273.15);

  return (
    <div>
      <h2>Current Weather</h2>
      <div>
        <h3>{name}</h3>
        <p>{currentDate}</p>
        <p>Temperature: {temperatureCelsius}°C</p>
        <p>Humidity: {main.humidity}%</p>
        <p>Condition: {weatherData[0].main}</p>
        <p>Description: {weatherData[0].description}</p>
      </div>
    </div>
  );
};

export default WeatherInfo;
