import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { InteractionName, interactionsName } from "../../types";
import { MicroInteractionsView } from "../../views/MicroInteractionsView";

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: Object.values(interactionsName).map((i) => ({
      params: { interactionName: i },
    })),
    fallback: false,
  };
};

export const getStaticProps = ({ params }: { params: { interactionName: string } }) => {
  return { props: { interactionName: params.interactionName } };
};

type MicroAnimationsPageProps = { interactionName: string };

const MicroAnimationsPage: NextPage<MicroAnimationsPageProps> = ({ interactionName }) => {
  return (
    <main style={{ height: "100vh", background: "#FCFAF6", padding: "2%" }}>
      <MicroInteractionsView interactionName={interactionName as InteractionName} />
    </main>
  );
};

export default MicroAnimationsPage;
