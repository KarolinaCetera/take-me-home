import React, { ComponentPropsWithRef, HTMLInputTypeAttribute } from "react";
import { cn } from "@/app/utils/cn";

type Props = {
  label?: string;
} & ComponentPropsWithRef<"input">;

const Input = React.forwardRef<HTMLInputElement, Props>(
  ({ type = "text", label, className, ...props }: Props, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "h-[50px] block rounded-md px-2 py-4 w-full text-base bg-white outline-none appearance-none placeholder-gray-300 focus:border-gray-300 border-2 border-gray-300",
          className,
        )}
        type={type}
        {...props}
      />
    );
  },
);

Input.displayName = "Input";

export default Input;
