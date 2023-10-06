import { UserSettings } from "@/types";
import { ClipboardIcon } from "@heroicons/react/24/outline";
import React from "react";
import ToolTip from "./ToolTip";

type Props = {
  result: string;
  handleClick: () => void;
  settings: UserSettings;
};

const Result = ({ result, handleClick, settings }: Props) => {
  return (
    <section aria-labelledby="result" className="">
      <header className="flex items-center justify-between">
        <h2 id="result" className="text-xl font-medium">
          Result
        </h2>
        {settings.showCopyToClipboard && (
          <button
            title="Copy result to clipboard"
            onClick={handleClick}
            className="p-2 rounded-full cursor-pointer hover:bg-gray-100 active:bg-gray-200 dark:active:bg-gray-400 dark:hover:bg-gray-300"
          >
            <ClipboardIcon className="w-6 h-6 text-headingText dark:text-darkHeadingText" />
          </button>
        )}
      </header>
      {result && (
        <div className="flex gap-4 items-center">
          <p className="text-subheadingText dark:text-darkSubheadingText text-xl font-medium">
            {result}
          </p>
          <ToolTip info="Click on the result to change it's format/prefix" />
        </div>
      )}
    </section>
  );
};

export default Result;
