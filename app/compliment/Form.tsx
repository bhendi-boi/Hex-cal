"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import Toast from "../Toast";
import Input from "../Input";
import Button from "../Button";
import Switch from "../Switch";
import ChooseBase from "../ChooseBase";
import { ClipboardIcon } from "@heroicons/react/24/outline";
import { generateRegex } from "@/lib/generateRegex";
import { copyToClipboard } from "@/lib/copyToClipboard";
import { findNumberOfBits } from "@/lib/findNumberOfBits";
import { useSettings } from "@/hooks/useSettings";
import { Bases, InputModeTypes } from "@/types";
import { findCompliment } from "@/lib/compliment";

const Form = () => {
  const [isOnes, setIsOnes] = useState(false);
  const [inputBase, setInputBase] = useState<Bases>("bin");
  const [input, setInput] = useState("");
  const [bits, setBits] = useState("");
  const [result, setResult] = useState("");
  const [showStatus, setShowStatus] = useState(false);
  const { pattern, inputMode } = generateRegex(inputBase);
  const [settings] = useSettings();

  const parser = (input: string) => {
    if (inputBase === "bin") {
      return input.replace(/[^01]/g, "");
    }
    if (inputBase === "oct") {
      return input.replace(/[^0-7]/g, "");
    }
    if (inputBase === "dec") {
      return input.replace(/[^0-9]/g, "");
    }
    if (inputBase === "hex") {
      return input.replace(/[^0-9A-Fa-f]/g, "");
    }
  };
  function handleBitsChange(e: ChangeEvent<HTMLInputElement>) {
    const parsedValue = e.target.value.replace(/[^0-9]/g, "");
    setBits(parsedValue);
  }
  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    const parsedValue = parser(e.target.value) as string;
    setInput(parsedValue);
    const newNoOfBits = findNumberOfBits(inputBase, parsedValue);
    setBits(newNoOfBits);
  }

  function handleClick() {
    copyToClipboard(result);
    setShowStatus(true);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const output = findCompliment(isOnes, input, bits);
    setResult(output);
  }
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)} className="space-y-4">
        <div className="flex items-center justify-between gap-1 my-2">
          <p>Compute 1's compliment</p>
          <Switch
            srText="Compute 1's compliment"
            enabled={isOnes}
            setEnabled={setIsOnes}
          />
        </div>
        <ChooseBase
          variant="single"
          label="Choose Input Base"
          state={inputBase}
          setState={setInputBase}
        />

        <div className="flex flex-col gap-2">
          <label htmlFor="inputNumber" className="text-xl font-medium">
            Input Number
          </label>
          <Input
            name="inputNumber"
            id="inputNumber"
            placeholder="Enter your input here"
            pattern={pattern}
            inputMode={inputMode as InputModeTypes}
            value={input}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="bits" className="text-xl font-medium">
            No of bits
          </label>
          <Input
            id="bits"
            name="bits"
            type="text"
            placeholder="Enter your input here"
            pattern="^[0-9]+$"
            inputMode="decimal"
            value={bits}
            onChange={(e) => handleBitsChange(e)}
          />
        </div>
        <Button variant="calculator">Compute </Button>
      </form>
      {result !== undefined && (
        <section aria-labelledby="result" className="">
          <header className="flex items-center justify-between">
            <h2 id="result" className="text-xl font-medium">
              Result
            </h2>
            {settings.showCopyToClipboard && (
              <button
                title="Copy result to clipboard"
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
