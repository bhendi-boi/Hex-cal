import * as Dialog from "@radix-ui/react-dialog";
import { motion } from "framer-motion";
import { useHistory } from "@/hooks/useHistory";
import { ConverterHistoryItem } from "@/types";
const History = ({ toggleShowHistory }: { toggleShowHistory: () => void }) => {
  const [converterHistory] = useHistory();
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
          animate={{ top: "33%" }}
          transition={{ damping: 20 }}
          className="fixed left-0 z-10 w-full overflow-y-scroll bg-white"
        >
          {converterHistory.length === 0 && <div>No previous results</div>}
          <ul className="relative py-8 space-y-4">
            {converterHistory.map((item: ConverterHistoryItem, index) => {
              return <StyledLi key={index} item={item} />;
            })}
          </ul>
        </motion.div>
      </Dialog.Content>
    </Dialog.Portal>
  );
};

export default History;

function StyledLi({ item }: { item: ConverterHistoryItem }) {
  return (
    <li className="px-6 text-right">
      <article className="inline-block text-lg text-right">
        <p className="grid grid-cols-3 capitalize place-items-center">
          <span>{item.from}</span> <span> - </span> <span>{item.to}</span>
        </p>
        <p className="grid grid-cols-3">
          <span className="inline-block align-middle">{item.number}</span>
          <span className="inline-block col-span-2 text-2xl font-medium">
            {item.result}
          </span>
        </p>
      </article>
    </li>
  );
}
