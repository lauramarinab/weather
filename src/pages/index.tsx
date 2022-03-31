import type { NextPage } from "next";
import Link from "next/link";
import { Main } from "../components/Main";
import { HomepageView } from "../views/HomepageView";

const Home: NextPage = () => {
  return (
    <Main>
      <HomepageView />
    </Main>
  );
};

export default Home;
