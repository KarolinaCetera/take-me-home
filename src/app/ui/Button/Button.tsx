import React, { ComponentProps } from "react";
import { cn } from "@/app/utils/cn";
import { VariantProps } from "class-variance-authority";
import { buttonVariants } from "@/app/ui/Button/buttonVariants";

type Props = {
  rounded?: boolean;
  intent?: "primary" | "secondary";
  iconOnly?: boolean;
  icon?: React.JSX.Element;
} & ComponentProps<"button"> &
  VariantProps<typeof buttonVariants>;

const Button = ({
  children,
  icon,
  intent = "primary",
  rounded = false,
  iconOnly = false,
  className,
  ...props
}: Props) => {
  const Icon = () =>
    icon
      ? React.cloneElement(icon, {
          className: cn({ "ml-2": !iconOnly }, icon.props.className),
        })
      : null;

  return (
    <button
      className={cn(
        buttonVariants({ intent }),
        rounded ? "rounded-full" : "rounded-md",
        iconOnly ? "p-2" : "py-3 px-6",
        "flex justify-between",
        className,
      )}
      {...props}
    >
      {children}
      <Icon />
    </button>
  );
};

export default Button;
