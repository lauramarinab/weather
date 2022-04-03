import styled from "@emotion/styled";
import type { NextPage } from "next";
import Link from "next/link";
import { Main } from "../../components/Main";
import { Urls } from "../../urls";

const MicroInteractionsPage: NextPage = () => {
  return (
    <Main>
      <div css={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <Link href={Urls.interactionName("stepper")} passHref>
          <CardLink>Stepper</CardLink>
        </Link>
        <Link href={Urls.interactionName("highlights")} passHref>
          <CardLink>Highlights</CardLink>
        </Link>
        <Link href={Urls.interactionName("needHelp")} passHref>
          <CardLink>Need help</CardLink>
        </Link>
        <Link href={Urls.interactionName("animateOpen")} passHref>
          <CardLink>Effetto Collapse</CardLink>
        </Link>
        <Link href={Urls.interactionName("animatedCounter")} passHref>
          <CardLink>Counter animato</CardLink>
        </Link>
      </div>
    </Main>
  );
};

const CardLink = styled.a({
  background: "#ffffff",
  padding: 24,
  borderRadius: 16,
  textAlign: "center",
  fontSize: 16,
  transition: "box-shadow 250ms",
  boxShadow: "0px 0px 20px 6px rgb(195 193 193 / 25%)",
  ":hover, :focus": {
    boxShadow: "0px 0px 10px 2px rgb(195 193 193 / 20%)",
  },
});

export default MicroInteractionsPage;
