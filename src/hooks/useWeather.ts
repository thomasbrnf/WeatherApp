import { useState } from "react";
import { WeatherProps } from "../utilities/types";

export function useWeather() {
  const [weatherData, setWeatherData] = useState<WeatherProps | undefined>();

  function setWeather(data: WeatherProps | undefined) {
    setWeatherData(data);
  }

  return {
    weatherData,
    setWeather,
  };
}
