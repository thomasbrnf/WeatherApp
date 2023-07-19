import { NoWeatherData, WeatherDisplay } from ".";
import { WeatherProps } from "../../utilities/types";

export function WeatherBox({
  weatherData,
}: {
  weatherData: WeatherProps | undefined;
}) {
  if (weatherData === undefined) {
    return <NoWeatherData />;
  }
  return <WeatherDisplay data={weatherData} />;
}
