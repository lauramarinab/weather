import { usePress } from "@react-aria/interactions";
import { cities, CitiesUnion } from "../../enum-types";

type CityListProps = Pick<CityButtonProps, "onSelectCity">;

export const CityList: React.FC<CityListProps> = ({ onSelectCity }) => {
  return (
    <div
      style={{
        display: "flex",
        gap: 12,
        position: "absolute",
        left: "50%",
        transform: "translate(-50%, 0)",
        flexWrap: "wrap",
        width: "100%",
        justifyContent: "center",
      }}
    >
      {cities.map((city) => {
        return <CityButton key={city} onSelectCity={onSelectCity} city={city} />;
      })}
    </div>
  );
};

type CityButtonProps = {
  city: CitiesUnion;
  onSelectCity: (city: CitiesUnion) => void;
};

const CityButton: React.FC<CityButtonProps> = ({ city, onSelectCity }) => {
  let { pressProps } = usePress({
    onPress: () => {
      onSelectCity(city);
    },
  });

  return (
    <div
      {...pressProps}
      role="button"
      tabIndex={0}
      style={{
        padding: "6px 12px",
        background: "#1A98E6",
        color: "white",
        borderRadius: 6,
        fontSize: 14,
        whiteSpace: "nowrap",
      }}
    >
      {city}
    </div>
  );
};
