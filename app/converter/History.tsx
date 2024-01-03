import * as Dialog from "@radix-ui/react-dialog";
import { motion } from "framer-motion";
import { useHistory } from "@/hooks/useHistory";
import { ConverterHistoryItem } from "@/types";
import Button from "../Button";
const History = ({ toggleShowHistory }: { toggleShowHistory: () => void }) => {
  const [converterHistory, f, clearHistory] = useHistory();
  return (
    <Dialog.Portal>
      <Dialog.Overlay
        aria-hidden
        onClick={toggleShowHistory}
        className="fixed inset-0 z-10 bg-black/40"
      />
      <Dialog.Content asChild>
        <motion.div
          initial={{ top: "100%" }}
          animate={{ top: "50%" }}
          transition={{ damping: 20 }}
          className="fixed z-10 md:right-4 rounded-t-lg md:rounded-t-md w-full mx-auto md:max-w-96 overflow-y-scroll bg-white min-h-[50vh]"
        >
          {converterHistory.length === 0 && (
            <p className="px-4 py-3 text-xl font-semibold">
              No previous results to show.
            </p>
          )}
          {converterHistory.length !== 0 && (
            <>
              <div className="flex justify-between px-6 py-3">
                <h2 className="text-4xl font-extrabold text-headingText dark:text-darkHeadingText">
                  History
                </h2>
                <Button
                  className=""
                  variant="danger"
                  onClick={() => clearHistory()}
                >
                  Clear
                </Button>
              </div>
              <ul className="relative space-y-4 overflow-y-scroll">
                {converterHistory.map((item: ConverterHistoryItem, index) => {
                  return <StyledLi key={index} item={item} />;
                })}
              </ul>
            </>
          )}
        </motion.div>
      </Dialog.Content>
    </Dialog.Portal>
  );
};

export default History;

function StyledLi({ item }: { item: ConverterHistoryItem }) {
  return (
    <li className="px-6">
      <article className="block">
        <div className="flex text-base font-medium capitalize">
          <span className="w-full">{item.from}</span>{" "}
          <span className="w-full">{item.to}</span>
        </div>
        <div className="flex text-lg font-semibold">
          <span className="w-full">{item.number}</span>
          <span className="w-full">{item.result}</span>
        </div>
      </article>
    </li>
  );
}
