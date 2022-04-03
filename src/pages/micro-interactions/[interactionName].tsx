import { GetStaticPaths, NextPage } from "next";
import { InteractionName, interactionsName } from "../../types";
import { MicroInteractionDetailView } from "../../views/MicroInteractionsView";

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

type MicroInteractionDetailPageProps = { interactionName: string };

const MicroInteractionDetailPage: NextPage<MicroInteractionDetailPageProps> = ({ interactionName }) => {
  return (
    <main style={{ height: "calc(100vh - 50px)", position: "relative", padding: "24px 32px" }}>
      <MicroInteractionDetailView interactionName={interactionName as InteractionName} />
    </main>
  );
};

export default MicroInteractionDetailPage;
