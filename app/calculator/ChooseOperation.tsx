"use client";
import React, { SetStateAction, ReactNode } from "react";
import { motion } from "framer-motion";
import { RadioGroup } from "@headlessui/react";
import clsx from "clsx";
import { useSettings } from "@/hooks/useSettings";
import { Operations } from "@/types";

type Props = {
  label: string;
  state: Operations;
  setState: React.Dispatch<SetStateAction<Operations>>;
};

export default function ChooseOperation({ label, state, setState }: Props) {
  const [settings] = useSettings();

  return (
    <RadioGroup className="mb-4" value={state} onChange={setState}>
      <RadioGroup.Label className="">{label}</RadioGroup.Label>
      <div className="h-16 overflow-hidden">
        <div className="flex justify-between h-20 gap-1 py-3 pb-4 my-4 overflow-x-auto sm:gap-4 sm:justify-start">
          <RadioGroup.Option value="add">
            {({ checked, disabled }) => (
              <StyledSpan
                darkMode={settings.darkMode}
                disabled={disabled}
                checked={checked}
              >
                {settings.showFullText ? "Addition" : "Add"}
              </StyledSpan>
            )}
          </RadioGroup.Option>
          <RadioGroup.Option value="sub">
            {({ checked, disabled }) => (
              <StyledSpan
                darkMode={settings.darkMode}
                disabled={disabled}
                checked={checked}
              >
                {settings.showFullText ? "Subtraction" : "Sub"}
              </StyledSpan>
            )}
          </RadioGroup.Option>
          <RadioGroup.Option value="mul">
            {({ checked, disabled }) => (
              <StyledSpan
                darkMode={settings.darkMode}
                disabled={disabled}
                checked={checked}
              >
                {settings.showFullText ? "Multiplication" : "Mul"}
              </StyledSpan>
            )}
          </RadioGroup.Option>
          <RadioGroup.Option value="div">
            {({ checked, disabled }) => (
              <StyledSpan
                darkMode={settings.darkMode}
                disabled={disabled}
                checked={checked}
              >
                {settings.showFullText ? "Division" : "Div"}
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
