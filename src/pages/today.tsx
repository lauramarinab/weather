import { NextPage } from "next";
import { Layout } from "../components/Layout";
import { TodayWeatherView } from "../views/TodayWeatherView";

const TodayWeather: NextPage = () => {
  return (
    <Layout>
      <TodayWeatherView />
    </Layout>
  );
};

export default TodayWeather;
