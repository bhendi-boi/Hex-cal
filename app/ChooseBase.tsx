"use client";
import { SetStateAction, ReactNode } from "react";
import { motion } from "framer-motion";
import { RadioGroup } from "@headlessui/react";
import clsx from "clsx";
import { Bases } from "@/types";

type Props = {
  label: string;
  state: Bases;
  otherState?: Bases;
  setState: React.Dispatch<SetStateAction<Bases>>;
};

export default function ChooseBase({
  label,
  state,
  otherState,
  setState,
}: Props) {
  return (
    <RadioGroup className="mb-4" value={state} onChange={setState}>
      <RadioGroup.Label className="">{label}</RadioGroup.Label>
      <div className="h-16 overflow-hidden">
        <div className="flex h-20 gap-4 py-3 pb-4 my-4 overflow-x-auto">
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
        backgroundColor: "#ffffff",
        color: "#111827",
      }}
      animate={{
        backgroundColor: disabled
          ? "#6b7280"
          : checked
          ? "rgb(37 99 235)"
          : "#ffffff",
        color: disabled ? "#f3f3f3" : checked ? "#ffffff" : "#111827",
      }}
      className={clsx("px-6 py-3 rounded-full cursor-pointer")}
    >
      {children}
    </motion.span>
  );
}
