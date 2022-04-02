import { InteractionName } from "./types";

export const Urls = {
  today: `/today`,
  microInteractions: `/micro-interactions`,
  interactionName: (interaction: InteractionName) => `/micro-interactions/${interaction}`,
};
