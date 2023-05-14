"use client";
import React, { SetStateAction } from "react";
import { motion } from "framer-motion";
import { RadioGroup } from "@headlessui/react";
import clsx from "clsx";
import { Bases } from "@/types";

type Props = {
  label: string;
  state: Bases;
  setState: React.Dispatch<SetStateAction<Bases>>;
};

export default function ChooseBase({ label, state, setState }: Props) {
  return (
    <RadioGroup className="mb-4" value={state} onChange={setState}>
      <RadioGroup.Label className="px-2">{label}</RadioGroup.Label>
      <div className="h-16 overflow-hidden">
        <div className="flex h-20 gap-4 py-3 pb-4 my-4 overflow-x-auto">
          <RadioGroup.Option value="bin">
            {({ checked }) => (
              <motion.span
                initial={{
                  backgroundColor: "#ffffff",
                  color: "#111827",
                }}
                animate={{
                  backgroundColor: checked ? "rgb(37 99 235)" : "#ffffff",
                  color: checked ? "#ffffff" : "#111827",
                }}
                className={clsx("px-6 py-3 rounded-full cursor-pointer")}
              >
                Binary
              </motion.span>
            )}
          </RadioGroup.Option>
          <RadioGroup.Option value="oct">
            {({ checked }) => (
              <motion.span
                initial={{
                  backgroundColor: "#ffffff",
                  color: "#111827",
                }}
                animate={{
                  backgroundColor: checked ? "rgb(37 99 235)" : "#ffffff",
                  color: checked ? "#ffffff" : "#111827",
                }}
                className={clsx("px-6 py-3 rounded-full cursor-pointer")}
              >
                Octal
              </motion.span>
            )}
          </RadioGroup.Option>
          <RadioGroup.Option value="dec">
            {({ checked }) => (
              <motion.span
                initial={{
                  backgroundColor: "#ffffff",
                  color: "#111827",
                }}
                animate={{
                  backgroundColor: checked ? "rgb(37 99 235)" : "#ffffff",
                  color: checked ? "#ffffff" : "#111827",
                }}
                className={clsx("px-6 py-3 rounded-full cursor-pointer")}
              >
                Decimal
              </motion.span>
            )}
          </RadioGroup.Option>
          <RadioGroup.Option value="hex">
            {({ checked }) => (
              <motion.span
                initial={{
                  backgroundColor: "#ffffff",
                  color: "#111827",
                }}
                animate={{
                  backgroundColor: checked ? "rgb(37 99 235)" : "#ffffff",
                  color: checked ? "#ffffff" : "#111827",
                }}
                className={clsx("px-6 py-3 rounded-full cursor-pointer")}
              >
                Hexadecimal
              </motion.span>
            )}
          </RadioGroup.Option>
        </div>
      </div>
    </RadioGroup>
  );
}
