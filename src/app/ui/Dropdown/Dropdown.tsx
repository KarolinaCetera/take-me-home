"use client";

import React, { ComponentProps, PropsWithChildren, useState } from "react";
import Button from "@/app/ui/Button/Button";
import { cn } from "@/app/utils/cn";
import { ArrowDropDown, ChevronRight } from "@mui/icons-material";

type Props = {
  triggerText: string;
} & ComponentProps<"div">;

const Dropdown = ({ triggerText, children, className }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={cn("w-full", className)}>
      <Button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full h-[50px]"
        icon={
          <ChevronRight className={cn(isOpen ? "-rotate-90" : "rotate-90")} />
        }
      >
        {triggerText}
      </Button>
      {isOpen ? children : null}
    </div>
  );
};

export default Dropdown;
