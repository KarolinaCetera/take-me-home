import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  [
    "flex",
    "items-center",
    "tracking-wider",
    "rounded-md",
    "text-gray-50",
    "text-base",
  ],
  {
    variants: {
      intent: {
        primary: ["bg-violet-600", "hover:bg-violet-400"],
        secondary: ["bg-amber-600", "hover:bg-amber-700"],
      },
    },
    defaultVariants: {
      intent: "primary",
    },
  },
);
