import { useState } from 'react';
import './App.css';
import Forecast from './components/Forecast/Forecast';
import Search from './components/Search/Search';
import WeatherInfo from './components/WeatherInfo/WeatherInfo';

function App() {
  const [input,setInput] = useState("");
  const[weather,setWeather] = useState({});
  const [forecast,setForecast] = useState([])

  const API_KEY = 'bc10b5e6cc9f4c332635398940193864'

  const handleChange=(e)=>{
    setInput(e.target.value)
  }
  const search =(e)=>{
    if(e.key==='Enter'){
      console.log(input,'onclick ')
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${API_KEY}`)
      .then(res=>res.json())
      .then(data=>{
        // console.log(data);
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
    <div className="App">
      <h1 className=''>Weather forecast app</h1>
      <Search value={input} handleChange={handleChange} search={search} />
      {Object.keys(weather).length > 0 && <WeatherInfo weather={weather} />}
      {forecast.length > 0 && <Forecast forecast={forecast} />}

    </div>
  );
}

export default App;
