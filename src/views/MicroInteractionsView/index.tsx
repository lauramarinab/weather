import { InteractionName } from "../../types";

type MicroInteractionDetailViewProps = { interactionName: InteractionName };

export const MicroInteractionDetailView: React.FC<MicroInteractionDetailViewProps> = ({ interactionName }) => {
  return (
    <>
      <h2 css={{ fontFamily: '"Open Sans", sans-serif', color: "#df325f", fontWeight: "600", fontSize: 24 }}>
        {microInteractions[interactionName].description}
      </h2>
      <video
        muted
        playsInline
        controls
        width="768"
        autoPlay
        css={{
          margin: "0 auto",
          transform: "translate(-50%, -50%)",
          top: "50%",
          left: "50%",
          position: "absolute",
          boxShadow: "0px 0px 9px 1px rgb(123 123 123 / 15%)",
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
    </>
  );
};

const microInteractions: Record<InteractionName, { id: string; description: string }> = {
  stepper: { id: "161131088-16ff487d-298b-45bc-bfde-277d6913cf30", description: "Stepper" },
  highlights: { id: "161136716-364b4da1-7cda-4138-98c0-607865900b6c", description: "Lead card con effetto highlights" },
  needHelp: { id: "161389220-ce5a75ae-ad3a-4253-91cf-1154cade3fa6", description: "Bottone con animazione: Need help?" },
  pageTransition: { id: "161422198-d3c1d75b-c57c-41ea-bcd9-b5becf8d3434", description: "Transizione tra le pagine" },
  animateOpen: {
    id: "161389696-0ce1aa0d-5928-41aa-8320-33aae031e22f",
    description: "Effetto collapse con framer motion",
  },
  animatedCounter: {
    id: "161390070-41eb357b-14a8-4c8e-ab4d-92512a79d494",
    description: "Counter animato",
  },
};
