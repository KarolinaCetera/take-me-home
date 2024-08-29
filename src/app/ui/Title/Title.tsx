import React, { ComponentProps } from "react";
import { VariantProps } from "class-variance-authority";
import { titleVariants } from "@/app/ui/Title/titleVariants";
import { cn } from "@/app/utils/cn";

type As = "h1" | "h2" | "h3" | "h4" | "h5";

type Props = { level: number } & ComponentProps<As> &
  VariantProps<typeof titleVariants>;

const Title = ({ level, children, className }: Props) => {
  return React.createElement(
    `h${level}`,
    {
      className: cn(titleVariants({ level }), className),
    },
    children,
  );
};

export default Title;
