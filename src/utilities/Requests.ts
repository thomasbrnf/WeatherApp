import { getProperData } from "./dataHandler";

interface Place {
  id: number;
  name: string;
  openweather_api_name: string;
  created_at: string;
}

async function findInDatabase(
  location: string,
  token: string | null | undefined,
) {
  const response = await fetch("http://localhost:5000/api/locations", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data: Place[] = await response.json();

  const hasLocation = data.some((place: Place) => {
    return place.name.toLowerCase() === location.toLowerCase();
  });

  if (hasLocation) {
    const place = data.find(
      (place) => place.name.toLowerCase() === location.toLowerCase(),
    );

    return place?.id;
  } else {
    return null;
  }
}

async function addLocationToDatabase(
  location: string,
  token: string | null | undefined,
) {
  const result = await fetch("http://localhost:5000/api/add-location", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: location,
    }),
  });

  return await result.json();
}

export async function fetchWeatherData(
  token: string | null | undefined,
  id: number | null | undefined,
) {
  const result = await fetch(`http://localhost:5000/api/weather/${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return await result.json();
}

export function getToken() {
  const tokenCookie = document.cookie.match(/(?:^|;)\s*token\s*=\s*([^;]+)/);
  return tokenCookie ? tokenCookie.pop() : null;
}

export const findOrAddLocation = async (
  location: string,
  token: string | null | undefined,
) => {
  const placeId = await findInDatabase(location, token);
  if (placeId === null) {
    await addLocationToDatabase(location, token);
    return findInDatabase(location, token);
  }
  return placeId;
};

export const fetchWeather = async (form: any) => {
  const token = getToken();
  const location = form.values.location;

  const placeId = await findOrAddLocation(location, token);

  const data = await fetchWeatherData(token, placeId);
  if ("error" in data) {
    return undefined;
  } else {
    return getProperData(data);
  }
};
