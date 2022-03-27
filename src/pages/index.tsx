import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { withPrefix } from "../../with-prefix";
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
