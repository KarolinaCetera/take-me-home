import React, { ComponentPropsWithRef, useState } from "react";
import { Check } from "@mui/icons-material";
import { cn } from "@/app/utils/cn";

type Props = {
  label?: string;
} & ComponentPropsWithRef<"input">;

const Checkbox = React.forwardRef<HTMLInputElement, Props>(
  ({ label, className, ...props }: Props, ref) => {
    return (
      <div
        className={cn(
          "h-[50px] flex items-center cursor-pointer rounded-md px-2 py-2 border-2 border-gray-300 bg-white",
          className,
        )}
      >
        <label
          className="relative flex items-center justify-center"
          htmlFor={label}
        >
          <input
            type="checkbox"
            ref={ref}
            className="peer relative h-6 w-6 mr-2 cursor-pointer appearance-none rounded-md border-2 border-gray-300 transition-all checked:border-gray-300"
            id={label}
            {...props}
          />
          <Check
            fontSize="small"
            className="absolute stroke-violet-400 text-base text-violet-400 stroke-2 transition-opacity opacity-0 pointer-events-none top-[42%] left-[39%] -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100"
          />
        </label>
        <label htmlFor={label} className="text-base">
          {label}
        </label>
      </div>
    );
  },
);

Checkbox.displayName = "Checkbox";

export default Checkbox;
