"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import ChooseBase from "../ChooseBase";
import Input from "../Input";
import { Bases, InputModeTypes } from "@/types";
import { generateRegex } from "@/lib/generateRegex";
import { converter } from "@/lib/converter";

const Form = () => {
  const [from, setFrom] = useState<Bases>("bin");
  const [to, setTo] = useState<Bases>("dec");
  const [number, setNumber] = useState<string>("");
  const [result, setResult] = useState<string>("");

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
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const res = converter({ from, to, number });
    setResult(res);
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="px-2">
      <ChooseBase
        label="From"
        state={from}
        setState={setFrom}
        otherState={to}
      />
      <ChooseBase label="To" state={to} setState={setTo} otherState={from} />
      <div className="flex flex-col gap-2">
        <label htmlFor="number">Number</label>
        <Input
          id="number"
          name="number"
          required
          type="text"
          pattern={pattern}
          inputMode={inputMode as InputModeTypes}
          placeholder="Enter number here ..."
          value={number}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <button
        type="submit"
        className="w-full py-3 my-4 font-medium text-white bg-green-600 rounded-md"
      >
        Convert
      </button>
      {result !== undefined && (
        <div>
          <h2 className="text-xl font-medium">Result</h2>
          <p className="text-gray-950">{result}</p>
        </div>
      )}
    </form>
  );
};

export default Form;
