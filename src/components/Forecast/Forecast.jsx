import React from 'react';

const Forecast = ({ forecast }) => {
    const today = new Date();
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    // Calculate the next 3 weekdays
    const nextWeekdays = [];
    for (let i = 1; nextWeekdays.length < 3; i++) {
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
        <div>
            <h2>Forecast for the Next 3 Weekdays</h2>
            <div className='flex justify-center mt-10 gap-4'>
                {uniqueForecast.map((item) => {
                    const { weekday, item: forecastItem } = item;
                    return (
                        <div className='border border-red-400 w-52 ' key={forecastItem.dt}>
                            <p>Weekday: {weekday}</p>
                            <p>  Condition: {forecastItem.weather[0].main}</p>
                            <p> Description: {forecastItem.weather[0].description}</p>
                            <p> Temperature: {forecastItem.main.temp}°C</p>
                            <p> Humidity: {forecastItem.main.humidity}% </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Forecast;
