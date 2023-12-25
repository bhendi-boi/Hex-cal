import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import * as Dialog from "@radix-ui/react-dialog";

type Props = {
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
  message: string;
};

const Toast = ({ state, setState, message }: Props) => {
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
            className="fixed z-50 w-full max-w-xs p-4 mx-auto -translate-x-1/2 bg-white rounded-lg left-1/2"
          >
            <Dialog.Title className="mx-auto text-lg font-medium text-center text-headingText">
              {message}
            </Dialog.Title>
          </motion.div>
        </Dialog.Content>
      </AnimatePresence>
    </Dialog.Root>
  );
};

export default Toast;
