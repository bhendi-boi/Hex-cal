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
              <StyledSpan disabled={disabled} checked={checked}>
                {settings.showFullText ? "Addition" : "Add"}
              </StyledSpan>
            )}
          </RadioGroup.Option>
          <RadioGroup.Option value="sub">
            {({ checked, disabled }) => (
              <StyledSpan disabled={disabled} checked={checked}>
                {settings.showFullText ? "Subtraction" : "Sub"}
              </StyledSpan>
            )}
          </RadioGroup.Option>
          <RadioGroup.Option value="mul">
            {({ checked, disabled }) => (
              <StyledSpan disabled={disabled} checked={checked}>
                {settings.showFullText ? "Multiplication" : "Mul"}
              </StyledSpan>
            )}
          </RadioGroup.Option>
          <RadioGroup.Option value="div">
            {({ checked, disabled }) => (
              <StyledSpan disabled={disabled} checked={checked}>
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
