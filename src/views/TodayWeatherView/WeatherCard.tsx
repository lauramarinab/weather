import { AnimatePresence, motion } from "framer-motion";
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

  const celsius = data ? Math.round(parseFloat(data.main.temp) - 273.15) : 0;

  const imagePath = data ? getImgByWeatherDescription(data.weather[0].main) : "";

  return (
    <AnimatePresence>
      {data && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
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
            <img src={withPrefix(imagePath)} alt={data.weather[0].main} width={60} height={60} />
            <div>
              <p style={{ fontSize: 16 }}>{data.weather[0].description}</p>
              <p style={{ fontSize: 40 }}>{celsius}°</p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const getCoordinatesQueryParams = ({ lat, lon }: Coordinates) => {
  return `?lat=${lat}&lon=${lon}`;
};

const getImgByWeatherDescription = (weatherDescription: string): string => {
  switch (weatherDescription) {
    case "Clouds":
      return "/images/clouds.png";
    case "Clear":
      return "/images/clear.png";
    case "Rain":
      return "/images/rain.png";
    default:
      return "/images/thinking.png";
  }
};
