import useSWR from "swr";
import { withPrefix } from "../../../with-prefix";
import { CitiesUnion, Coordinates } from "../../enum-types";
import { fetchData } from "../../fetch-data";

const langQueryParam = "&lang=it";

type WeatherCardProps = {
  city: CitiesUnion;
  coordinates: Coordinates;
};
export const WeatherCard: React.FC<WeatherCardProps> = ({ coordinates, city }) => {
  const coordinatesQueryParams = getCoordinatesQueryParams({
    lat: coordinates.lat,
    lon: coordinates.lon,
  });

  const { data, error } = useSWR(
    `https://api.openweathermap.org/data/2.5/weather${coordinatesQueryParams}${langQueryParam}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}
  `,
    fetchData
  );

  if (error) {
    return <div>failed to load</div>;
  }

  if (!data) {
    return <div>loading...</div>;
  }

  const celsius = Math.round(parseFloat(data.main.temp) - 273.15);

  const image = withPrefix(imgToWeatherDescription[data.weather[0].main]);

  console.log({ main: data.weather[0].main });

  return (
    <div
      style={{
        height: "calc(100% - 50px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <div
        style={{
          maxWidth: 200,
          width: "100%",
          background: "white",
          borderRadius: 16,
          boxShadow: "0px 0px 15px 5px rgb(0 0 0 / 5%)",
          padding: 40,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 24,
        }}
      >
        <h2 style={{ fontSize: 24 }}>{city}</h2>
        {image ? <img src={image} alt={data.weather[0].main} width={60} height={60} /> : null}
        <div>
          <p style={{ fontSize: 16 }}>{data.weather[0].description}</p>
          <p style={{ fontSize: 40 }}>{celsius}°</p>
        </div>
      </div>
    </div>
  );
};

const getCoordinatesQueryParams = ({ lat, lon }: Coordinates) => {
  return `?lat=${lat}&lon=${lon}`;
};

const imgToWeatherDescription: Record<string, string> = {
  Clouds: "/images/clouds.png",
  Clear: "/images/clear.png",
  Rain: "/images/rain.png",
};
