// This gets the weather data and the api key information
async function getWeatherData() {
  const apiKey = 'a210d786daa3fb047488bb9d19cf6fb5';
  const city = 'Carlsbad';
  const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

  try {
    const response = await fetch(currentWeatherUrl);
    const data = await response.json();

    // This converts Kelvin to Fahrenheit
    const tempFahrenheit = (data.main.temp - 273.15) * 9/5 + 32;

// This populates the current weather details with temperature, humidity, and condition, this doesn't display on the home screen
    document.getElementById('weather-details').innerHTML = `
      <p>Temperature: ${tempFahrenheit.toFixed(0)}°F</p>
      <p>Condition: ${data.weather[0].description}</p>
      <p>Humidity: ${data.main.humidity}%</p>`;

    // This sets up the weather icon  
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    const desc = data.weather[0].description;
    let weatherIcon = document.getElementById("weather-icon");
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);

    // This fetches and displays the forecast for 9:00 AM for the next three days
    const forecastResponse = await fetch(forecastUrl);
    const forecastData = await forecastResponse.json();
    const forecastDetails = document.getElementById('forecast-details');

    forecastDetails.innerHTML = ''; // This should clear the previous forecast data

    for (let i = 0; i < 24; i += 8) {
      // This converts the Kelvin to Fahrenheit for forecast data
      const forecastTempFahrenheit = (forecastData.list[i].main.temp - 273.15) * 9/5 + 32;

      forecastDetails.innerHTML += `
        <p>${forecastData.list[i].dt_txt}: ${forecastTempFahrenheit.toFixed(0)}°F, ${forecastData.list[i].weather[0].description}</p>
      `;
    }
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
}
getWeatherData();