import { useRouter } from "next/router";
import { withPrefix } from "../../../with-prefix";

export const HomepageView: React.FC = () => {
  const router = useRouter();
  return (
    <>
      <h1 className="title-homepage">
        Weather with blob
        <span>
          <img src={withPrefix("/images/blob-cookie.png")} alt="blob cookie" width={50} height={50} />
        </span>
      </h1>
      <button onClick={() => router.push("/today")}>{"Che tempo c'è adesso?"}</button>
    </>
  );
};
