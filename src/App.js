import { useState } from 'react';
import './App.css';
import Forecast from './components/Forecast/Forecast';
import Search from './components/Search/Search';
import WeatherInfo from './components/WeatherInfo/WeatherInfo';

function App() {
  const [input, setInput] = useState("");
  const [weather, setWeather] = useState({});
  const [forecast, setForecast] = useState([]);

  const API_KEY = 'bc10b5e6cc9f4c332635398940193864'

  const handleChange = (e) => {
    setInput(e.target.value)
  }
  const search = (e) => {
    if (e.key === 'Enter') {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${API_KEY}`)
        .then(res => res.json())
        .then(data => {
          setWeather(data);
        })
      fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${input}&appid=${API_KEY}`)
        .then(res => res.json())
        .then(data => {
          setForecast(data.list);
        });

      setInput("");
    }
  }
  return (
    <div className="text-center bg-blue-50 h-[100vh] font-serif">
      <h1 className='pt-10 text-4xl capitalize'>Weather forecast app</h1>
      <div className='w-[70%] mx-auto'>
        <Search value={input} handleChange={handleChange} search={search} />
        {Object.keys(weather).length > 0 && <WeatherInfo weather={weather} />}
        {forecast.length === 0 && <p className='mt-10 text-xl'>No Weather forecast !! Please Enter a country name</p> }
        {forecast.length > 0 && <Forecast forecast={forecast} />}
      </div>
    </div>
  );
}

export default App;
