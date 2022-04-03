import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import useSWR from "swr";
import { withPrefix } from "../../../with-prefix";
import { CitiesUnion } from "../../enum-types";
import { fetchData } from "../../fetch-data";
import { CityList } from "./CityList";
import { WeatherCard } from "./WeatherCard";

export const TodayWeatherView: React.FC = () => {
  const router = useRouter();
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
    <div style={{ height: "100%" }}>
      <div css={{ display: "flex", alignItems: "center", gap: 12, cursor: "pointer" }} onClick={() => router.back()}>
        <img src={withPrefix("/images/blob-cookie.png")} alt="blob cookie" width={30} height={30} />
        <h1 css={{ textAlign: "center", fontSize: 24 }}>Weather with blob</h1>
      </div>

      {/* <CityList onSelectCity={setSelectedCity} /> */}
      <WeatherCard coordinates={{ lat: data[0].lat, lon: data[0].lon }} city={selectedCity} />
    </div>
  );
};
