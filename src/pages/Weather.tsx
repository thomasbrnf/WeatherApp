import { useState } from "react";
import { useWeather } from "../hooks/useWeather";
import { MantineProvider, MantineThemeOverride } from "@mantine/core";
import { useForm, isNotEmpty } from "@mantine/form";
import { theme } from "../styles/theme";
import { WeatherBox, SearchBar } from "../components/Weather";
import { fetchWeatherData } from "../services/weather.service";

export default function Weather() {
  const { weatherData, setWeather } = useWeather();
  const [show, setShow] = useState(false);

  const form = useForm({
    initialValues: {
      location: "",
    },
    validate: {
      location: isNotEmpty("Enter Location"),
    },
  });

  const handleSearch = async () => {
    form.validate();

    if (!form.isValid()) return;

    const data = await fetchWeatherData(form);
    setWeather(data);

    if (!show) setShow(true);
  };

  return (
    <MantineProvider withGlobalStyles theme={theme as MantineThemeOverride}>
      <SearchBar form={form} onSearch={handleSearch} />
      {show && <WeatherBox weatherData={weatherData} />}
    </MantineProvider>
  );
}
