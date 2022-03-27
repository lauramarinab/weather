export const cities = ["Milan", "London", "Miami", "Madrid", "Berlin", "Tokyo", "Bangkok", "New York"] as const;

export type CitiesUnion = typeof cities[number];

export type Coordinates = {
  lat: number;
  lon: number;
};
