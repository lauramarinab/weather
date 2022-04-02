import { NextPage } from "next";
import { InteractionName } from "../../types";
import { MicroInteractionsView } from "../../views/MicroInteractionsView";

type MicroAnimationsPageProps = { interactionName: string };

const MicroAnimationsPage: NextPage<MicroAnimationsPageProps> = ({ interactionName }) => {
  return (
    <main style={{ height: "100vh", background: "#FCFAF6", padding: "2%" }}>
      <MicroInteractionsView interactionName={interactionName as InteractionName} />
    </main>
  );
};

MicroAnimationsPage.getInitialProps = ({ query }) => {
  const interactionName = query.interactionName as string;
  return { interactionName };
};

export default MicroAnimationsPage;
