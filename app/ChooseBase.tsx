"use client";
import { SetStateAction, ReactNode } from "react";
import { motion } from "framer-motion";
import { RadioGroup } from "@headlessui/react";
import clsx from "clsx";
import { Bases } from "@/types";
import { useSettings } from "@/hooks/useSettings";
import { ArrowsUpDownIcon } from "@heroicons/react/24/outline";
import { swapBases } from "@/lib/swapBases";
import Button from "./Button";

type Props =
  | {
      variant: "single";
      isSettings?: boolean;
      label: string;
      state: Bases;
      setState: React.Dispatch<SetStateAction<Bases>>;
    }
  | {
      variant: "double";
      isSettings?: boolean;
      label: string;
      state: Bases;
      setState: React.Dispatch<SetStateAction<Bases>>;
      otherState: Bases;
      setOtherState: React.Dispatch<SetStateAction<Bases>>;
    };

export default function ChooseBase(props: Props) {
  const [settings] = useSettings();
  if (props.variant === "single") {
    const { isSettings, label, state, setState } = props;
    return (
      <RadioGroup
        className={clsx(!isSettings && "my-4", isSettings && "my-2")}
        value={state}
        onChange={setState}
      >
        <RadioGroup.Label
          className={clsx(!isSettings && "text-xl font-medium")}
        >
          {label}
        </RadioGroup.Label>
        <div className="h-16 overflow-hidden">
          <div className="flex justify-between h-20 gap-1 py-3 pb-4 my-4 overflow-x-auto sm:gap-4 sm:justify-start">
            <RadioGroup.Option value="bin">
              {({ checked, disabled }) => (
                <StyledSpan
                  darkMode={settings.darkMode}
                  checked={checked}
                  disabled={disabled}
                >
                  {settings.showFullText ? "Binary" : "Bin"}
                </StyledSpan>
              )}
            </RadioGroup.Option>
            <RadioGroup.Option value="oct">
              {({ checked, disabled }) => (
                <StyledSpan
                  darkMode={settings.darkMode}
                  checked={checked}
                  disabled={disabled}
                >
                  {settings.showFullText ? "Octal" : "Oct"}
                </StyledSpan>
              )}
            </RadioGroup.Option>
            <RadioGroup.Option value="dec">
              {({ checked, disabled }) => (
                <StyledSpan
                  darkMode={settings.darkMode}
                  checked={checked}
                  disabled={disabled}
                >
                  {settings.showFullText ? "Decimal" : "Dec"}
                </StyledSpan>
              )}
            </RadioGroup.Option>
            <RadioGroup.Option value="hex">
              {({ checked, disabled }) => (
                <StyledSpan
                  darkMode={settings.darkMode}
                  checked={checked}
                  disabled={disabled}
                >
                  {settings.showFullText ? "Hexadecimal" : "Hex"}
                </StyledSpan>
              )}
            </RadioGroup.Option>
          </div>
        </div>
      </RadioGroup>
    );
  } else {
    const { isSettings, label, state, setState, otherState, setOtherState } =
      props;
    return (
      <RadioGroup
        className={clsx(!isSettings && "my-4", isSettings && "my-2")}
        value={state}
        onChange={setState}
      >
        <div className="flex items-center gap-4">
          <RadioGroup.Label
            className={clsx(!isSettings && "text-xl font-medium")}
          >
            {label}
          </RadioGroup.Label>
          {otherState && (
            <Button
              variant="swap"
              type="button"
              onClick={() =>
                swapBases(state, setState, otherState, setOtherState)
              }
            >
              <ArrowsUpDownIcon className="w-6 h-6" />
            </Button>
          )}
        </div>
        <div className="h-16 overflow-hidden">
          <div className="flex justify-between h-20 gap-1 py-3 pb-4 my-4 overflow-x-auto sm:gap-4 sm:justify-start">
            <RadioGroup.Option disabled={otherState === "bin"} value="bin">
              {({ checked, disabled }) => (
                <StyledSpan
                  darkMode={settings.darkMode}
                  checked={checked}
                  disabled={disabled}
                >
                  {settings.showFullText ? "Binary" : "Bin"}
                </StyledSpan>
              )}
            </RadioGroup.Option>
            <RadioGroup.Option disabled={otherState === "oct"} value="oct">
              {({ checked, disabled }) => (
                <StyledSpan
                  darkMode={settings.darkMode}
                  checked={checked}
                  disabled={disabled}
                >
                  {settings.showFullText ? "Octal" : "Oct"}
                </StyledSpan>
              )}
            </RadioGroup.Option>
            <RadioGroup.Option disabled={otherState === "dec"} value="dec">
              {({ checked, disabled }) => (
                <StyledSpan
                  darkMode={settings.darkMode}
                  checked={checked}
                  disabled={disabled}
                >
                  {settings.showFullText ? "Decimal" : "Dec"}
                </StyledSpan>
              )}
            </RadioGroup.Option>
            <RadioGroup.Option disabled={otherState === "hex"} value="hex">
              {({ checked, disabled }) => (
                <StyledSpan
                  darkMode={settings.darkMode}
                  checked={checked}
                  disabled={disabled}
                >
                  {settings.showFullText ? "Hexadecimal" : "Hex"}
                </StyledSpan>
              )}
            </RadioGroup.Option>
          </div>
        </div>
      </RadioGroup>
    );
  }
}

function StyledSpan({
  checked,
  disabled,
  darkMode,
  children,
}: {
  checked: boolean;
  disabled: boolean;
  darkMode: boolean;
  children: ReactNode;
}) {
  return (
    // bg    #e5e7eb - gray-200  #2563eb - blue-600  #f9fafb - gray-50
    // color #6b7280 - gray-500  #f9fafb - gray-50   #111827 - gray-900

    // bg    #9ca3af - gray-400  #3b82f6 - blue-500  #e5e7eb - gray-200
    // color #1f2937 - gray-800  #f9fafb - gray-50   #030712 - gray-950

    <motion.span
      initial="disabled"
      animate={disabled ? "disabled" : checked ? "checked" : "unChecked"}
      transition={{
        type: "spring",
        duration: 0.25,
      }}
      variants={{
        disabled: {
          backgroundColor: !darkMode ? "#e5e7eb" : "#9ca3af",
          color: darkMode ? "#6b7280" : "#1f2937",
        },
        checked: {
          backgroundColor: !darkMode ? "#2563eb" : "#3b82f6",
          color: "#f9fafb",
        },
        unChecked: {
          backgroundColor: !darkMode ? "#f9fafb" : "#e5e7eb",
          color: darkMode ? "#111827" : "#030712",
        },
      }}
      className={clsx(
        "px-6 py-3 rounded-full",
        !disabled && "cursor-pointer",
        disabled && "cursor-not-allowed"
      )}
    >
      {children}
    </motion.span>
  );
}
