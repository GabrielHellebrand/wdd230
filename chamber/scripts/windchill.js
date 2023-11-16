function showWindChill(temp, speed){
    const windchillSpan = document.getElementById("windchill");
    let message = "n/a";
    if (temp <= 50 && speed > 3){
        let chillfactor = Math.pow(speed, 0.16);
        let chill = math.round(35.74 + (0.6215 * temp) - (35.75 * chillfactor) + (0.4275 * temp * chillfactor));
        message = '${chill}';
    }
    windchillSpan.textContent = message;

    const temperatureSpan = document.getElementById("temperature")
    const windspeedSpan = document.getElementById("windspeed")
    const temperature = parseInt(temperatureSpan.textContent);
    const windspeed = parseInt(windspeedSpan.textContent);
    showWindChill(temp, windspeed);

}
const url = "https://api.openweathermap.org/data/2.5/weather?lat={43.830043}&lon={-111.829468}&appid={a210d786daa3fb047488bb9d19cf6fb5}&units=imperial"