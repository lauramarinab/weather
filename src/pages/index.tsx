import type { NextPage } from "next";
import { Layout } from "../components/Layout";
import { HomepageView } from "../views/HomepageView";

const Homepage: NextPage = () => {
  return (
    <Layout>
      <HomepageView />
    </Layout>
  );
};

export default Homepage;
