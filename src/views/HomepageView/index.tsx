import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/router";
import { withPrefix } from "../../../with-prefix";
import { Urls } from "../../urls";

export const HomepageView: React.FC = () => {
  return (
    <div
      css={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <div css={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
        <img src={withPrefix("/images/blob-cookie.png")} alt="blob cookie" width={50} height={50} />
        <h1 css={{ textAlign: "center", fontSize: "3rem" }}>Weather with blob</h1>
        <Link href={Urls.today} passHref>
          <a
            css={{
              background:
                "linear-gradient(to right, rgba(0, 100, 200, 1), rgba(42, 255, 255, 1)), linear-gradient(to right, rgba(255, 0, 0, 1), rgba(255, 0, 180, 1), rgba(0, 100, 200, 1))",
              backgroundSize: "100% 0.1em, 0 0.1em",
              backgroundPosition: "100% 100%, 0 100%",
              backgroundRepeat: "no-repeat",
              transition: "background-size 400ms",
              cursor: "pointer",
              padding: "4px 6px",
              ":hover, :focus": {
                backgroundSize: "0 0.1em, 100% 0.1em",
              },
            }}
          >
            Meteo oggi
          </a>
        </Link>
      </div>
    </div>
  );
};
