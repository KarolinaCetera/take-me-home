import { cva } from "class-variance-authority";

export const typographyVariants = cva([], {
  variants: {
    size: {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-base",
    },
    bold: {
      true: "font-bold",
    },
  },
  defaultVariants: {
    size: "md",
    bold: false,
  },
});
