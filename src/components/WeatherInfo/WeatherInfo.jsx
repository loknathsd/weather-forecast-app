import React from 'react';

const WeatherInfo = ({ weather }) => {
  const { name, main, weather: weatherData, } = weather;
  
  // Get the current weekday and date
  const today = new Date();
  const options = { weekday: 'long', month: 'long', day: 'numeric' };
  const currentDate = today.toLocaleDateString('en-US', options);
  const temperatureCelsius = Math.round(main.temp - 273.15);

  return (
    <div className='shadow-lg text-left bg-white rounded py-5 px-16 mt-5 w-2/3 mx-auto'>
      <h2 className='text-left mb-3 text-xl'>Current Weather</h2>
      <div className='flex justify-between'>
        <div>
          <h3 className='text-3xl'>{name}</h3>
          <p>{currentDate}</p>
          <p className='text-4xl mt-2'> {temperatureCelsius}°C</p>
          <p className='text-xl'> {weatherData[0].main}</p>
        </div>
        <div className='text-xl'>
          <p>Feels like {temperatureCelsius}°</p>
          <p className='my-1'>Humidity: {main.humidity}%</p>
          <p>Wind: {weather.wind.speed}</p>
          <p>Pressure: {main.pressure}</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
