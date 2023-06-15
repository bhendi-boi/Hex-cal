"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import Input from "../Input";
import Button from "../Button";
import Toast from "../Toast";
import ChooseBase from "../ChooseBase";
import { ClipboardIcon } from "@heroicons/react/24/outline";
import { useSettings } from "@/hooks/useSettings";
import { generateRegex } from "@/lib/generateRegex";
import { converter } from "@/lib/converter";
import { copyToClipboard } from "@/lib/copyToClipboard";
import { Bases, InputModeTypes } from "@/types";
import { addPrefix } from "@/lib/addPrefix";

const Form = () => {
  const [settings] = useSettings();
  const [from, setFrom] = useState<Bases>(settings.defaultFromBase);
  const [to, setTo] = useState<Bases>(settings.defaultToBase);
  const [number, setNumber] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [showStatus, setShowStatus] = useState(false);

  const { pattern, inputMode } = generateRegex(from);

  const parser = (input: string) => {
    if (from === "bin") {
      return input.replace(/[^01]/g, "");
    }
    if (from === "oct") {
      return input.replace(/[^0-7]/g, "");
    }
    if (from === "dec") {
      return input.replace(/[^0-9]/g, "");
    }
    if (from === "hex") {
      return input.replace(/[^0-9A-Fa-f]/g, "");
    }
  };
  // event handlers
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const parsedValue = parser(e.target.value) as string;
    setNumber(parsedValue);
  }

  function handleClick() {
    copyToClipboard(result);
    setShowStatus(true);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const res = converter({ from, to, number });
    if (settings.addPrefixToResult) {
      const formattedRes = addPrefix({ result: res, base: to });
      setResult(formattedRes);
    } else {
      setResult(res);
    }
  }

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)} className="px-2">
        <ChooseBase
          label="From"
          state={from}
          setState={setFrom}
          otherState={to}
        />
        <ChooseBase label="To" state={to} setState={setTo} otherState={from} />
        <div className="flex flex-col gap-2">
          <label htmlFor="number" className="text-xl font-medium">
            Number
          </label>
          <Input
            id="number"
            name="number"
            required
            type="text"
            pattern={pattern}
            inputMode={inputMode as InputModeTypes}
            placeholder="Number goes here ..."
            value={number}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <Button
          variant="converter"
          type="submit"
          className="w-full py-3 my-4 text-2xl font-medium text-white bg-green-600 rounded-md"
        >
          Convert
        </Button>
      </form>
      {result !== undefined && (
        <section aria-labelledby="result" className="px-2">
          <header className="flex items-center justify-between">
            <h2 id="result" className="text-xl font-medium">
              Result
            </h2>
            {settings.showCopyToClipboard && (
              <button
                onClick={handleClick}
                className="p-2 rounded-full cursor-pointer hover:bg-gray-100 active:bg-gray-200 dark:active:bg-gray-400 dark:hover:bg-gray-300"
              >
                <ClipboardIcon className="w-6 h-6 text-headingText dark:text-darkHeadingText" />
              </button>
            )}
          </header>
          <p className="text-subheadingText dark:text-darkSubheadingText">
            {result}
          </p>
        </section>
      )}
      <Toast
        state={showStatus}
        setState={setShowStatus}
        message="Result copied to clipboard 😉"
      />
    </>
  );
};

export default Form;
