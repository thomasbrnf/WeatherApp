export interface WeatherProps {
  temp: number;
  humidity: any;
  weather: any;
  windSpeed: number;
}

export interface Location {
  id: number;
  name: string;
  openweather_api_name: string;
  created_at: string;
}
