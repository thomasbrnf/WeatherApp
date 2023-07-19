import { fetchLocations, addLocation, fetchWeather } from "./weather.api";
import { getProperData } from "../utilities/helper";
import { Location } from "../utilities/types";
import { getToken } from "./auth.service";

const token = getToken();

export const getOrCreateLocationID = async (location: string) => {
  const placeId = await findLocationID(location);
  if (placeId === null) {
    await addLocation(location, token);
    return findLocationID(location);
  }
  return placeId;
};

export const fetchWeatherData = async (form: any) => {
  const location = form.values.location;

  const placeId = await getOrCreateLocationID(location);
  const data = await fetchWeather(token, placeId);

  if ("error" in data) {
    return undefined;
  } else {
    return getProperData(data);
  }
};

const findLocationID = async (location: string) => {
  const data: [Location] = await fetchLocations(token);
  const foundLocation = data.find(
    (place) => place.name.toLowerCase() === location.toLowerCase(),
  );

  return foundLocation ? foundLocation.id : null;
};
