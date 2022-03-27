import Link from "next/link";
import { useRouter } from "next/router";
import { withPrefix } from "../../with-prefix";

type Props = {};
export const HomepageView: React.FC<Props> = () => {
  const router = useRouter();
  return (
    <>
      <h1 style={{ fontSize: "3rem", display: "flex", alignItems: "center", gap: 24 }}>
        Weather with blob
        <span>
          <img src={withPrefix("/images/blob-cookie.png")} alt="blob cookie" width={50} height={50} />
        </span>
      </h1>
      <button onClick={() => router.push("/today")}>Che tempo farà domani?</button>
    </>
  );
};
