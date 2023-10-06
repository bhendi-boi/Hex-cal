"use client";
import React from "react";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { Popover } from "@headlessui/react";

type Props = {
  info: string;
};

const ToolTip = ({ info }: Props) => {
  return (
    <Popover className="relative flex-1">
      <Popover.Button className="block">
        <InformationCircleIcon className="w-4 h-4 text-headingText dark:text-darkHeadingText" />
      </Popover.Button>
      <Popover.Panel className="absolute z-10 bottom-4 bg-blue-600 dark:bg-blue-500 min-w-[20rem] p-4 rounded-md drop-shadow left-4 text-disabled">
        <p className="font-medium text-base">{info}</p>
      </Popover.Panel>
    </Popover>
  );
};

export default ToolTip;
