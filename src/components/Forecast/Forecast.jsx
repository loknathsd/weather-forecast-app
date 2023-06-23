import React from 'react';

const Forecast = ({ forecast }) => {
    const today = new Date();
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    // Calculate the next 3 weekdays
    const nextWeekdays = [];
    for (let i = 1; nextWeekdays.length < 7; i++) {
        const nextDay = new Date(today);
        nextDay.setDate(today.getDate() + i);
        const weekDay = nextDay.getDay();
        if (weekdays.includes(weekdays[weekDay])) {
            nextWeekdays.push(weekdays[weekDay]);
        }
    }
    // Filter forecast data for the next 3 weekdays and remove duplicates
    const filteredForecast = forecast.filter((item) => {
        const forecastDate = new Date(item.dt * 1000);
        const forecastWeekday = weekdays[forecastDate.getDay()];
        return nextWeekdays.includes(forecastWeekday);
    });
    // Remove duplicates from the filtered forecast
    const uniqueForecast = [];
    filteredForecast.forEach((item) => {
        const forecastDate = new Date(item.dt * 1000);
        const forecastWeekday = weekdays[forecastDate.getDay()];
        if (!uniqueForecast.some((uniqueItem) => uniqueItem.weekday === forecastWeekday)) {
            uniqueForecast.push({ weekday: forecastWeekday, item });
        }
    });
    return (
        <div className='w-2/3 mx-auto shadow-lg bg-white mt-5 py-5 px-10 rounded h-52 '>
            <h1 className=' text-xl mb-5'>Extended Forecast</h1>
            <div className='flex justify-center gap-4'>
                {uniqueForecast.map((item) => {
                    const { weekday, item: forecastItem } = item;
                    return (
                        <div className='border border-gray-500 rounded w-52 p-3' key={forecastItem.dt}>
                            <p>{weekday}</p>
                            <p className='text-2xl my-1'> {Math.round(forecastItem.main.temp - 273.15)}°C</p>
                            <p> {forecastItem.weather[0].main}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Forecast;
