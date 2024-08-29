import React, { ComponentPropsWithRef } from "react";
import { cn } from "@/app/utils/cn";

type Props = {
  label?: string;
} & ComponentPropsWithRef<"input">;

const Radio = React.forwardRef<HTMLInputElement, Props>(
  ({ label, className, ...props }: Props, ref) => {
    return (
      <label
        className="w-full inline-flex items-center rounded-md h-[50px] px-2 py-4 relative cursor-pointer border-2 border-gray-300 bg-white"
        htmlFor={label}
      >
        <input
          type="radio"
          ref={ref}
          className={cn(
            "peer relative h-6 w-6 mr-2 cursor-pointer appearance-none rounded-full before:content-[''] before:hidden before:h-[14px] before:w-[14px] before:bg-violet-400 checked:before:block before:rounded-full before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 transition-all before:border-gray-400 border-2 border-gray-300",
            className,
          )}
          id={label}
          {...props}
        />
        <span className="text-base">{label}</span>
      </label>
    );
  },
);

Radio.displayName = "Radio";

export default Radio;
