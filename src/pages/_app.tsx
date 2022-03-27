import type { AppContext, AppInitialProps, AppProps } from "next/app";
import { NextComponentType } from "next";
import Head from "next/head";
import { withPrefix } from "../../with-prefix";

import "../styles/reset.css";
import "../styles/globals.css";

const CustomApp: NextComponentType<AppContext, AppInitialProps, AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Weather App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href={withPrefix("/favicon.ico")} />
      </Head>
      <div>
        <Component {...pageProps} />
        <footer
          style={{
            position: "fixed",
            bottom: 0,
            width: "100%",
            padding: "0.8rem 0",
            borderTop: "1px solid #eaeaea",
            textAlign: "center",
          }}
        >
          <a
            href="https://github.com/lauramarinab"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: "0.8rem" }}
          >
            powered by lauramarinab{" "}
            <span role="img" aria-label="hearth">
              ❤️
            </span>
          </a>
        </footer>
      </div>
    </>
  );
};

export default CustomApp;