export function getProperData(data: any) {
  return {
    temp: getTempInCelsius(data),
    humidity: data.main.humidity,
    weather: data.weather[0].main,
    windSpeed: getSpeedPerHour(data),
  };
}

function getTempInCelsius(data: any) {
  const tempInCelsius = data.main.temp - 273.15;

  return Math.floor(tempInCelsius);
}

function getSpeedPerHour(data: any) {
  const speed = data.wind.speed * 3.6;

  return Math.floor(speed);
}
