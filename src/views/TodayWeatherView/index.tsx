import Link from "next/link";
import { useState } from "react";
import useSWR from "swr";
import { CitiesUnion } from "../../enum-types";
import { fetchData } from "../../fetch-data";
import { CityList } from "./CityList";
import { WeatherCard } from "./WeatherCard";

export const TodayWeatherView: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<CitiesUnion>("Milan");

  const { data, error } = useSWR(
    `http://api.openweathermap.org/geo/1.0/direct?q=${selectedCity}&limit=1&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}
  `,
    fetchData
  );

  if (!data || error) {
    return null;
  }

  return (
    <div style={{ height: "100vh", padding: "2%" }}>
      <Link href="/" passHref>
        <a style={{ display: "flex", gap: 12 }}>
          <span role="img" aria-label="arrow back">
            ⬅️
          </span>
        </a>
      </Link>
      <CityList onSelectCity={setSelectedCity} />
      <WeatherCard coordinates={{ lat: data[0].lat, lon: data[0].lon }} city={selectedCity} />
    </div>
  );
};
