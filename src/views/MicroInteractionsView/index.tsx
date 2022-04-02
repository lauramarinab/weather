import { InteractionName } from "../../types";

type MicroInteractionsViewProps = { interactionName: InteractionName };

export const MicroInteractionsView: React.FC<MicroInteractionsViewProps> = ({ interactionName }) => {
  return (
    <div>
      <h2 className="title-interaction">{microInteractions[interactionName].description}</h2>
      <video
        controls
        width="768"
        autoPlay
        style={{
          margin: "0 auto",
          position: "absolute",
          transform: "translate(-50%, -50%)",
          left: "50%",
          top: "calc(50% - 25px)",
        }}
      >
        <source
          src={`${process.env.NEXT_PUBLIC_GITHUB_ASSETS_PATH}${microInteractions[interactionName].id}.mov`}
          type="video/webm"
        />

        <source
          src={`${process.env.NEXT_PUBLIC_GITHUB_ASSETS_PATH}${microInteractions[interactionName].id}.mov`}
          type="video/mp4"
        />
      </video>
    </div>
  );
};

const microInteractions: Record<InteractionName, { id: string; description: string }> = {
  stepper: { id: "161131088-16ff487d-298b-45bc-bfde-277d6913cf30", description: "Stepper" },
  highlights: { id: "161136716-364b4da1-7cda-4138-98c0-607865900b6c", description: "Lead card con effetto highlights" },
  needHelp: { id: "161389220-ce5a75ae-ad3a-4253-91cf-1154cade3fa6", description: "Bottone con animazione: Need help?" },
  animateOpen: {
    id: "161389696-0ce1aa0d-5928-41aa-8320-33aae031e22f",
    description: "Effetto collapse con framer motion",
  },
  animatedCounter: {
    id: "161390070-41eb357b-14a8-4c8e-ab4d-92512a79d494",
    description: "Counter animato",
  },
};
