const url = "https://api.openweathermap.org/data/2.5/weather?lat=43.830043&lon=-111.829468&appid=a210d786daa3fb047488bb9d19cf6fb5&units=imperial"

const forecasturl= "https://api.openweathermap.org/data/2.5/forecast?lat=43.830043&lon=-111.829468&appid=a210d786daa3fb047488bb9d19cf6fb5&units=imperial"

function displayWeather(weatherData) {
  const desc = weatherData.weather[0].description;
  const windSpeed = weatherData.wind.speed.toFixed(0);
  const temperature = weatherData.main.temp.toFixed(0);

  //Set up the weather icon
  let weatherIcon = document.getElementById("weather-icon");
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);

  //Set up the weather description
  let weatherDesc = document.getElementById("weather-desc");
  weatherDesc.innerHTML = `${desc}`;
  
  let weatherTemp = document.getElementById("weather-temp");
  weatherTemp.innerHTML = `${temperature}&deg;F | ${windSpeed} mph wind`;
}

async function getTheWeather() {
  try {
    const response = await fetch(apiURL);
    if (response.ok) {
      const data = await response.json();
      displayWeather(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}
     // OpenWeatherMap API key
     const apiKey = 'a210d786daa3fb047488bb9d19cf6fb5';
    
     const lat = '43.830043';
     const lon = '-111.829468';

     // Function to get the current weather
     function getCurrentWeather() {
         const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=43.830043&lon=-111.829468&appid=a210d786daa3fb047488bb9d19cf6fb5&units=imperial`;

         $.get(apiUrl, function (data) {
             const currentTemp = data.main.temp;
             const weatherDescription = data.weather[0].description;

             // Display current weather data
             $('#current-temp').text(`Current Temperature: ${currentTemp}°C`);
             $('#current-description').text(`Current Weather: ${weatherDescription}`);
         });
     }

     // Function to get the 3-day forecast
     function getThreeDayForecast() {
         const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=43.830043&lon=-111.829468&appid=a210d786daa3fb047488bb9d19cf6fb5&units=imperial`;

         $.get(forecastUrl, function (data) {
             const forecastList = $('#forecast-list');

             // Clear previous forecast data
             forecastList.empty();

             // Display 3-day forecast data
             for (let i = 0; i < 3; i++) {
                 const timestamp = data.list[i * 8].dt;
                 const date = new Date(timestamp * 1000);
                 const temperature = data.list[i * 8].main.temp;

                 const listItem = `<li>${date.toDateString()}: ${temperature}°C</li>`;
                 forecastList.append(listItem);
             }
         });
     }

     // Function to show/hide the chamber banner based on the day of the week
     function updateChamberBanner() {
         const today = new Date();
         const dayOfWeek = today.getDay();

         if (dayOfWeek >= 1 && dayOfWeek <= 3) { // Monday, Tuesday, or Wednesday
             $('#chamber-banner').removeClass('hide');
         } else {
             $('#chamber-banner').addClass('hide');
         }
     }

     // Function to close the chamber banner
     $('#close-banner').click(function () {
         $('#chamber-banner').addClass('hide');
     });

     // Initial setup
     getCurrentWeather();
     getThreeDayForecast();
     updateChamberBanner();

getTheWeather();