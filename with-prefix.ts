const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const withPrefix = (path: string): string => {
  return `${prefix}${path}`;
};
