"use client";
import React, { useState } from "react";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import * as RadixTooltip from "@radix-ui/react-tooltip";

type Props = {
  info: string;
};

const ToolTip = ({ info }: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root open={open} delayDuration={0} onOpenChange={setOpen}>
        <RadixTooltip.Trigger asChild>
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="block p-2"
          >
            <InformationCircleIcon className="w-4 h-4 text-headingText dark:text-darkHeadingText" />
          </button>
        </RadixTooltip.Trigger>
        <RadixTooltip.Content
          align="start"
          className="z-10 bg-blue-600 dark:bg-blue-500 min-w-[20rem] p-4 rounded-md drop-shadow  text-disabled"
        >
          <p className="text-base font-medium">{info}</p>
        </RadixTooltip.Content>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
};

export default ToolTip;
