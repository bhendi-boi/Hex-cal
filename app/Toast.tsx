import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import * as Dialog from "@radix-ui/react-dialog";
import clsx from "clsx";

type Props = {
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
  message: string;
  messageType?: "info" | "warning";
};

const Toast = ({ state, setState, message, messageType = "info" }: Props) => {
  return (
    <Dialog.Root open={state} onOpenChange={setState}>
      <Dialog.Overlay asChild>
        <motion.div
          className="fixed inset-0 z-50 bg-black/30"
          aria-hidden="true"
        />
      </Dialog.Overlay>
      <AnimatePresence>
        <Dialog.Content asChild>
          <motion.div
            initial={{
              top: "100%",
            }}
            animate={{ top: "75%" }}
            className={clsx(
              "fixed z-50 w-full max-w-xs p-4 mx-auto -translate-x-1/2  rounded-lg left-1/2",
              messageType === "warning" && "bg-red-600",
              messageType === "info" && "bg-white"
            )}
          >
            <Dialog.Title
              className={clsx(
                "mx-auto text-lg font-medium text-center",
                messageType === "warning" && "text-white",
                messageType === "info" && "text-headingText"
              )}
            >
              {message}
            </Dialog.Title>
          </motion.div>
        </Dialog.Content>
      </AnimatePresence>
    </Dialog.Root>
  );
};

export default Toast;
