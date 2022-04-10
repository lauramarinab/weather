import styled from "@emotion/styled";
import { motion } from "framer-motion";
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
      <motion.div
        css={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}
        layoutId="wrapper-header"
      >
        <motion.img
          src={withPrefix("/images/blob-cookie.png")}
          alt="blob cookie"
          width={50}
          height={50}
          layoutId="blob"
        />
        <motion.h1 layoutId="title" css={{ textAlign: "center", fontSize: 42 }}>
          Weather with blob
        </motion.h1>
        <Link href={Urls.today} passHref>
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            exit={{ opacity: 0 }}
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
          </motion.a>
        </Link>
      </motion.div>
    </div>
  );
};
