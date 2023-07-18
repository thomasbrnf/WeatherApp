import { useState } from "react";
import { MantineProvider, MantineThemeOverride } from "@mantine/core";
import { useForm, isNotEmpty } from "@mantine/form";
import { theme } from "../styles/theme";
import { WeatherProps } from "../utilities/dataHandler";
import { WeatherDisplay } from "../components/Weather/WeatherDisplay";
import { NoWeatherData } from "../components/Weather/NoWeatherData";
import { fetchWeather } from "../utilities/Requests";
import { Search } from "../components/Search";

function WeatherBox({
  weatherData,
}: {
  weatherData: WeatherProps | undefined;
}) {
  if (weatherData === undefined) {
    return <NoWeatherData />;
  }
  return <WeatherDisplay data={weatherData} />;
}

export default function WeatherSearch() {
  const [weatherData, setWeatherData] = useState<WeatherProps | undefined>();
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

    const data = await fetchWeather(form);
    setWeatherData(data);

    if (!show) setShow(true);
  };

  return (
    <MantineProvider withGlobalStyles theme={theme as MantineThemeOverride}>
      <Search form={form} onSearch={handleSearch} />
      {show && <WeatherBox weatherData={weatherData} />}
    </MantineProvider>
  );
}
