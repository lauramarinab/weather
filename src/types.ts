type ValuesAsUnion<T> = T[keyof T];
type KeysAsUnion<T> = keyof T;

export const interactionsName = {
  stepper: "stepper",
  highlights: "highlights",
  needHelp: "needHelp",
  animateOpen: "animateOpen",
  animatedCounter: "animatedCounter",
} as const;

export type InteractionName = KeysAsUnion<typeof interactionsName>;
