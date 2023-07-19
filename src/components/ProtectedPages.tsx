import { Navigate } from "react-router-dom";
import WeatherSearch from "../pages/Weather";
import { getToken } from "../services/auth.service";

export function ProtectedPages() {
  return (
    <RequireAuth>
      <WeatherSearch />
    </RequireAuth>
  );
}

function RequireAuth({ children }: any) {
  const token = getToken();
  if (!token) {
    return <Navigate to="/" />;
  }
  return children;
}
