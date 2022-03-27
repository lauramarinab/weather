import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { withPrefix } from "../../with-prefix";
import { Main } from "../components/Main";

const Home: NextPage = () => {
  return (
    <Main>
      <h1 style={{ fontSize: "3rem", display: "flex", alignItems: "center", gap: 24 }}>
        Weather with blob
        <span>
          <img src={withPrefix("/images/blob-cookie.png")} alt="blob cookie" width={50} height={50} />
        </span>
      </h1>

      <Link href="/today" passHref>
        <a>Che tempo farà domani?</a>
      </Link>
    </Main>
  );
};

export default Home;
