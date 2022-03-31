import { NextPage } from "next";
import { InteractionName, MicroInteractionsView } from "../../views/MicroInteractionsView";

type MicroAnimationsPageProps = { interactionName: InteractionName };

const MicroAnimationsPage: NextPage<MicroAnimationsPageProps> = ({ interactionName }) => {
  return (
    <main style={{ height: "100vh", background: "#FCFAF6", padding: "2%" }}>
      <MicroInteractionsView interactionName={interactionName} />
    </main>
  );
};

MicroAnimationsPage.getInitialProps = ({ query }) => {
  const interactionName = query.interactionName as InteractionName;
  return { interactionName };
};

export default MicroAnimationsPage;
