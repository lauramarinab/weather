import Link from "next/link";
import { useRouter } from "next/router";
import { withPrefix } from "../../../with-prefix";
import { Urls } from "../../urls";

export const HomepageView: React.FC = () => {
  const router = useRouter();
  return (
    <>
      <Link href={Urls.microInteractions}>
        <a>Micro interactions</a>
      </Link>
      <h1 className="title-homepage">
        Weather with blob
        <span>
          <img src={withPrefix("/images/blob-cookie.png")} alt="blob cookie" width={50} height={50} />
        </span>
      </h1>
      <Link href={Urls.today}>
        <a>Meteo oggi</a>
      </Link>
    </>
  );
};
