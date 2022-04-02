import type { NextPage } from "next";
import Link from "next/link";
import { Main } from "../../components/Main";
import { Urls } from "../../urls";

const MicroInteractionsPage: NextPage = () => {
  return (
    <Main>
      <Link href={Urls.interactionName("stepper")}>
        <a>Stepper</a>
      </Link>
      <Link href={Urls.interactionName("highlights")}>
        <a>Highlights</a>
      </Link>
      <Link href={Urls.interactionName("needHelp")}>
        <a>Need help</a>
      </Link>
      <Link href={Urls.interactionName("animateOpen")}>
        <a>Effetto Collapse</a>
      </Link>
      <Link href={Urls.interactionName("animatedCounter")}>
        <a>Counter animato</a>
      </Link>
    </Main>
  );
};

export default MicroInteractionsPage;
