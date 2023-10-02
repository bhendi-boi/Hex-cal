import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Dialog } from "@headlessui/react";

type Props = {
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
  message: string;
};

const Toast = ({ state, setState, message }: Props) => {
  return (
    <Dialog
      className="bg-white relative z-50 rounded-lg"
      open={state}
      onClose={() => setState(false)}
    >
      <AnimatePresence>
        <motion.div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <motion.div
          initial={{
            top: "100%",
          }}
          animate={{ top: "75%" }}
          className="fixed top-3/4 w-full"
        >
          <Dialog.Panel className="mx-auto bg-white max-w-xs p-4 rounded-lg">
            <Dialog.Title className="mx-auto text-center font-medium text-lg text-headingText">
              {message}
            </Dialog.Title>
          </Dialog.Panel>
        </motion.div>
      </AnimatePresence>
    </Dialog>
  );
};

export default Toast;
