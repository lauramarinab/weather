import { NextPage } from "next";
import Link from "next/link";
import { withPrefix } from "../../with-prefix";

const CiaonePage: NextPage = () => {
  return (
    <div>
      <Link href="/" passHref>
        <a>{"<- Return to home"}</a>
      </Link>
      <div style={{ padding: 40 }}>
        <h2>Ciaone page</h2>
        <img src={withPrefix("/images/blob-cookie.png")} alt="blob cookie" width={45} height={45} />
      </div>
    </div>
  );
};

export default CiaonePage;
