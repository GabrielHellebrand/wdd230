async function getWeatherData() {
  const apiKey = 'a210d786daa3fb047488bb9d19cf6fb5';
  const city = 'Carlsbad';
  const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

  try {
    const response = await fetch(currentWeatherUrl);
    const data = await response.json();

    // Convert Kelvin to Fahrenheit
    const tempFahrenheit = (data.main.temp - 273.15) * 9/5 + 32;

    // Populate current weather details
    document.getElementById('weather-details').innerHTML = `
      <p>Temperature: ${tempFahrenheit.toFixed(0)}°F</p>
      <p>Condition: ${data.weather[0].description}</p>
      <p>Humidity: ${data.main.humidity}%</p>`;

    // Set up the weather icon
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    const desc = data.weather[0].description;
    let weatherIcon = document.getElementById("weather-icon");
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);

    // Fetch and display forecast for 9:00 AM for the next three days
    const forecastResponse = await fetch(forecastUrl);
    const forecastData = await forecastResponse.json();
    const forecastDetails = document.getElementById('forecast-details');

    forecastDetails.innerHTML = ''; // Clear previous forecast data

    for (let i = 0; i < 24; i += 8) {
      // Convert Kelvin to Fahrenheit for forecast data
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