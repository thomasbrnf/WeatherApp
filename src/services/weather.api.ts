export const fetchLocations = async (token: string | null | undefined) => {
  const response = await fetch("/api/locations", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return await response.json();
};

export const addLocation = async (
  location: string,
  token: string | null | undefined,
) => {
  const result = await fetch("/api/add-location", {
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
};

export const fetchWeather = async (
  token: string | null | undefined,
  id: number | null | undefined,
) => {
  const result = await fetch(`/api/weather/${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return await result.json();
};
