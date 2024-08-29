import React, { ComponentProps } from "react";
import { typographyVariants } from "@/app/ui/Typography/typographyVariants";
import { VariantProps } from "class-variance-authority";
import { cn } from "@/app/utils/cn";

type TypographySize = "xs" | "sm" | "md";

type As = "p" | "span";
type ParagraphProps = { as: "p" } & ComponentProps<"p">;
type SpanProps = { as: "span" } & ComponentProps<"span">;

type TagProps = ParagraphProps | SpanProps;

type Props = { as: As; size?: TypographySize; bold?: boolean } & TagProps &
  VariantProps<typeof typographyVariants>;

const Typography = ({
  as,
  children,
  className,
  size = "md",
  bold = false,
}: Props) => {
  return React.createElement(
    as,
    {
      className: cn(typographyVariants({ size, bold }), className),
    },
    children,
  );
};

export default Typography;
