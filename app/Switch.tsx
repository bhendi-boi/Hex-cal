"use client";
import * as Switch from "@radix-ui/react-switch";
import clsx from "clsx";
type Props = {
  enabled: boolean;
  setEnabled: React.Dispatch<React.SetStateAction<boolean>>;
  srText: string;
};

const MySwitch = ({ enabled = false, setEnabled, srText }: Props) => {
  return (
    <Switch.Root
      checked={enabled}
      onCheckedChange={setEnabled}
      className={clsx(
        "relative shrink-0 inline-flex h-6 w-11 items-center rounded-full z-0",
        enabled && "bg-blue-600 dark:bg-blue-500",
        !enabled && "bg-gray-200 dark:bg-gray-400"
      )}
    >
      <span className="sr-only">{srText}</span>
      <Switch.Thumb asChild>
        <span
          className={`${
            enabled ? "translate-x-6" : "translate-x-1"
          } inline-block h-4 w-4 transform rounded-full bg-white transition`}
        />
      </Switch.Thumb>
    </Switch.Root>
  );
};

export default MySwitch;
