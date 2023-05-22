"use client";
import React, { SetStateAction } from "react";
import { motion } from "framer-motion";
import { RadioGroup } from "@headlessui/react";
import clsx from "clsx";
import { Operations } from "@/types";

type Props = {
  label: string;
  state: Operations;
  setState: React.Dispatch<SetStateAction<Operations>>;
};

export default function ChooseOperation({ label, state, setState }: Props) {
  return (
    <RadioGroup className="mb-4" value={state} onChange={setState}>
      <RadioGroup.Label className="px-2">{label}</RadioGroup.Label>
      <div className="h-16 overflow-hidden">
        <div className="flex h-20 gap-4 py-3 pb-4 my-4 overflow-x-auto">
          <RadioGroup.Option value="add">
            {({ checked, disabled }) => (
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
                Addition
              </motion.span>
            )}
          </RadioGroup.Option>
          <RadioGroup.Option value="sub">
            {({ checked, disabled }) => (
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
                Subtraction
              </motion.span>
            )}
          </RadioGroup.Option>
          <RadioGroup.Option value="mul">
            {({ checked, disabled }) => (
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
                Multiplication
              </motion.span>
            )}
          </RadioGroup.Option>
          <RadioGroup.Option value="div">
            {({ checked, disabled }) => (
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
                Division
              </motion.span>
            )}
          </RadioGroup.Option>
        </div>
      </div>
    </RadioGroup>
  );
}
