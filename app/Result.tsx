import ToolTip from "./ToolTip";
import { UserSettings } from "@/types";
import { Dispatch, SetStateAction } from "react";
import { ClipboardIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { changePrefix } from "@/lib/changePrefix";

type Props = {
  result: string;
  setResult: Dispatch<SetStateAction<string>>;
  handleClickingOnClipboard: () => void;
  settings: UserSettings;
};

const Result = ({
  result,
  setResult,
  handleClickingOnClipboard,
  settings,
}: Props) => {
  function handleClick(e: React.MouseEvent) {
    setResult(changePrefix(e.currentTarget.innerHTML));
  }

  return (
    <section aria-labelledby="result" className="">
      <header className="flex items-center justify-between">
        <h2 id="result" className="text-xl font-medium">
          Result
        </h2>
        {settings.showCopyToClipboard && (
          <button
            title="Copy result to clipboard"
            onClick={handleClickingOnClipboard}
            className="p-2 rounded-full cursor-pointer hover:bg-gray-100 active:bg-gray-200 dark:active:bg-gray-400 dark:hover:bg-gray-300"
          >
            <ClipboardIcon className="w-6 h-6 text-headingText dark:text-darkHeadingText" />
          </button>
        )}
      </header>
      {result && (
        <div className="flex items-center gap-4">
          <p
            onClick={handleClick}
            className={clsx(
              "font-mono text-xl font-medium  text-subheadingText dark:text-darkSubheadingText",
              !settings.changePrefix && "pointer-events-none",
              settings.changePrefix && "cursor-pointer"
            )}
          >
            {result}
          </p>
          <ToolTip info="Click on the result to change it's format/prefix" />
        </div>
      )}
    </section>
  );
};

export default Result;
