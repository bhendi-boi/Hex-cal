"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import Toast from "../Toast";
import Input from "../Input";
import Button from "../Button";
import ChooseBase from "../ChooseBase";
import ChooseOperation from "./ChooseOperation";
import { ClipboardIcon } from "@heroicons/react/24/outline";
import { converter } from "@/lib/converter";
import { useSettings } from "@/hooks/useSettings";
import { generateRegex } from "@/lib/generateRegex";
import { copyToClipboard } from "@/lib/copyToClipboard";
import { reducer } from "@/lib/reducer";
import { Bases, InputModeTypes, Operations } from "@/types";

const Form = () => {
  const [settings] = useSettings();
  const [operand1, setOperand1] = useState("");
  const [operand1Base, setOperand1Base] = useState<Bases>(
    settings.defaultOperand1Base
  );
  const [operand2, setOperand2] = useState("");
  const [operand2Base, setOperand2Base] = useState<Bases>(
    settings.defaultOperand2Base
  );
  const [operation, setOperation] = useState<Operations>(
    settings.defaultOperation
  );
  const [result, setResult] = useState("");
  const [showStatus, setShowStatus] = useState(false);

  const { pattern: pattern1, inputMode: inputMode1 } =
    generateRegex(operand1Base);
  const { pattern: pattern2, inputMode: inputMode2 } =
    generateRegex(operand2Base);

  const parser = (input: string) => {
    if (operand1Base === "bin") {
      return input.replace(/[^01]/g, "");
    }
    if (operand1Base === "oct") {
      return input.replace(/[^0-7]/g, "");
    }
    if (operand1Base === "dec") {
      return input.replace(/[^0-9]/g, "");
    }
    if (operand1Base === "hex") {
      return input.replace(/[^0-9A-Fa-f]/g, "");
    }
  };
  // event handlers
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const parsedValue = parser(e.target.value) as string;
    if (e.target.name === "operand1") {
      setOperand1(parsedValue);
    } else {
      setOperand2(parsedValue);
    }
  }

  function handleClick() {
    copyToClipboard(result);
    setShowStatus(true);
  }
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const operand1AsDec = converter({
      from: operand1Base,
      to: "dec",
      number: operand1,
    });
    const operand2AsDec = converter({
      from: operand2Base,
      to: "dec",
      number: operand2,
    });
    const resultAsDec = reducer({ operand1AsDec, operand2AsDec, operation });
    setResult(resultAsDec.toString());
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="px-2 pb-4">
          <ChooseBase
            label="Operand 1"
            state={operand1Base}
            setState={setOperand1Base}
          />
          <Input
            type="text"
            id="operand1"
            name="operand1"
            pattern={pattern1}
            inputMode={inputMode1 as InputModeTypes}
            placeholder="Operand 1 goes here ..."
            value={operand1}
            onChange={handleChange}
          />
        </div>
        <ChooseOperation
          label="Choose operation"
          state={operation}
          setState={setOperation}
        />
        <div className="px-2 pt-4">
          <ChooseBase
            label="Operand 2"
            state={operand2Base}
            setState={setOperand2Base}
          />
          <Input
            type="text"
            id="operand2"
            name="operand2"
            pattern={pattern2}
            inputMode={inputMode2 as InputModeTypes}
            placeholder="Operand2 goes here ..."
            value={operand2}
            onChange={handleChange}
          />
        </div>
        <Button variant="calculator">Solve</Button>
      </form>
      {result !== undefined && (
        <section aria-labelledby="result" className="px-2">
          <header className="flex items-center justify-between">
            <h2 id="result" className="text-xl font-medium">
              Result
            </h2>
            {settings.showCopyToClipboard && (
              <button
                title="Copy result to clipboard"
                onClick={handleClick}
                className="p-2 rounded-full cursor-pointer hover:bg-gray-100 active:bg-gray-200 text-headingText dark:text-darkHeadingText"
              >
                <ClipboardIcon className="w-6 h-6" />
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
