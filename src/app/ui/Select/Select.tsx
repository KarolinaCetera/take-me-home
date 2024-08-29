import React, { ComponentPropsWithRef } from "react";
import { cn } from "@/app/utils/cn";

type Props = {
  options: { value: string; label: string }[];
} & ComponentPropsWithRef<"select">;

const Select = React.forwardRef<HTMLSelectElement, Props>(
  ({ options, name, className, ...props }: Props, ref) => {
    return (
      <select
        ref={ref}
        id={name}
        className={cn(
          "h-[50px] text-base rounded-md px-2 border-r-8 py-2 placeholder-gray-400 outline-none text-gray-300 border-transparent border-2 border-gray-300",
          className,
        )}
      >
        <option value="" disabled selected>
          Select your option
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    );
  },
);

Select.displayName = "Select";

export default Select;
