"use client";
import { SetStateAction, ReactNode } from "react";
import { motion } from "framer-motion";
import { RadioGroup } from "@headlessui/react";
import clsx from "clsx";
import { Bases } from "@/types";

type Props = {
  settings?: boolean;
  label: string;
  state: Bases;
  otherState?: Bases;
  setState: React.Dispatch<SetStateAction<Bases>>;
};

export default function ChooseBase({
  settings = false,
  label,
  state,
  otherState,
  setState,
}: Props) {
  return (
    <RadioGroup
      className={clsx(!settings && "my-4", settings && "my-2")}
      value={state}
      onChange={setState}
    >
      <RadioGroup.Label className={clsx(!settings && "text-xl font-medium")}>
        {label}
      </RadioGroup.Label>
      <div className="h-16 overflow-hidden">
        <div className="flex justify-between h-20 gap-1 py-3 pb-4 my-4 overflow-x-auto sm:gap-4 sm:justify-start">
          <RadioGroup.Option disabled={otherState === "bin"} value="bin">
            {({ checked, disabled }) => (
              <StyledSpan checked={checked} disabled={disabled}>
                Bin
              </StyledSpan>
            )}
          </RadioGroup.Option>
          <RadioGroup.Option disabled={otherState === "oct"} value="oct">
            {({ checked, disabled }) => (
              <StyledSpan checked={checked} disabled={disabled}>
                Oct
              </StyledSpan>
            )}
          </RadioGroup.Option>
          <RadioGroup.Option disabled={otherState === "dec"} value="dec">
            {({ checked, disabled }) => (
              <StyledSpan checked={checked} disabled={disabled}>
                Dec
              </StyledSpan>
            )}
          </RadioGroup.Option>
          <RadioGroup.Option disabled={otherState === "hex"} value="hex">
            {({ checked, disabled }) => (
              <StyledSpan checked={checked} disabled={disabled}>
                Hex
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
    <motion.span
      initial={{
        backgroundColor: "#e5e7eb",
        color: "#6b7280",
      }}
      animate={{
        backgroundColor: disabled ? "#e5e7eb" : checked ? "#2563eb" : "#f9fafb",
        color: disabled ? "#6b7280" : checked ? "#f9fafb" : "#111827",
      }}
      transition={{
        type: "tween",
        duration: 0.25,
        ease: "anticipate",
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
