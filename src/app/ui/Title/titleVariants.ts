import { cva } from "class-variance-authority";

export const titleVariants = cva(["font-bold"], {
  variants: {
    level: {
      1: ["text-2xl md:text-3xl"],
      2: ["text-xl md:text-2xl"],
      3: ["text-xl"],
      4: ["text-lg"],
      5: [],
    },
  },
});
