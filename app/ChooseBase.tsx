"use client";
import { SetStateAction, ReactNode } from "react";
import { motion } from "framer-motion";
import { RadioGroup } from "@headlessui/react";
import clsx from "clsx";
import { Bases } from "@/types";
import { useSettings } from "@/hooks/useSettings";

type Props = {
  isSettings?: boolean;
  label: string;
  state: Bases;
  otherState?: Bases;
  setState: React.Dispatch<SetStateAction<Bases>>;
};

export default function ChooseBase({
  isSettings = false,
  label,
  state,
  otherState,
  setState,
}: Props) {
  const [settings, updateSettings] = useSettings();

  return (
    <RadioGroup
      className={clsx(!isSettings && "my-4", isSettings && "my-2")}
      value={state}
      onChange={setState}
    >
      <RadioGroup.Label className={clsx(!isSettings && "text-xl font-medium")}>
        {label}
      </RadioGroup.Label>
      <div className="h-16 overflow-hidden">
        <div className="flex justify-between h-20 gap-1 py-3 pb-4 my-4 overflow-x-auto sm:gap-4 sm:justify-start">
          <RadioGroup.Option disabled={otherState === "bin"} value="bin">
            {({ checked, disabled }) => (
              <StyledSpan checked={checked} disabled={disabled}>
                {settings.showFullText ? "Binary" : "Bin"}
              </StyledSpan>
            )}
          </RadioGroup.Option>
          <RadioGroup.Option disabled={otherState === "oct"} value="oct">
            {({ checked, disabled }) => (
              <StyledSpan checked={checked} disabled={disabled}>
                {settings.showFullText ? "Octal" : "Oct"}
              </StyledSpan>
            )}
          </RadioGroup.Option>
          <RadioGroup.Option disabled={otherState === "dec"} value="dec">
            {({ checked, disabled }) => (
              <StyledSpan checked={checked} disabled={disabled}>
                {settings.showFullText ? "Decimal" : "Dec"}
              </StyledSpan>
            )}
          </RadioGroup.Option>
          <RadioGroup.Option disabled={otherState === "hex"} value="hex">
            {({ checked, disabled }) => (
              <StyledSpan checked={checked} disabled={disabled}>
                {settings.showFullText ? "Hexadecimal" : "Hex"}
              </StyledSpan>
            )}
          </RadioGroup.Option>
        </div>
      </div>
    </RadioGroup>
  );
}

function StyledSpan({
  checked,
  disabled,
  children,
}: {
  checked: boolean;
  disabled: boolean;
  children: ReactNode;
}) {
  return (
    // bg    #e5e7eb - gray-200  #2563eb - blue-600  #f9fafb - gray-50
    // color #6b7280 - gray-500  #f9fafb - gray-50   #111827 - gray-900
    <motion.span
      initial="disabled"
      animate={disabled ? "disabled" : checked ? "checked" : "unChecked"}
      transition={{
        type: "spring",
        duration: 0.25,
      }}
      variants={{
        disabled: {
          backgroundColor: "#e5e7eb",
          color: "#6b7280",
        },
        checked: {
          backgroundColor: "#2563eb",
          color: "#f9fafb",
        },
        unChecked: {
          backgroundColor: "#f9fafb",
          color: "#111827",
        },
      }}
      className={clsx(
        "px-6 py-3 rounded-full cursor-pointer",
        disabled && "cursor-not-allowed"
      )}
    >
      {children}
    </motion.span>
  );
}
