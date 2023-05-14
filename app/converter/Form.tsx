"use client";
import { useState, ChangeEvent, FormEvent } from "react";

import ChooseBase from "../ChooseBase";
import Input from "../Input";
import { Bases } from "@/types";

const Form = () => {
  const [from, setFrom] = useState<Bases>("bin");
  const [to, setTo] = useState<Bases>("dec");
  const [number, setNumber] = useState<number | undefined>(undefined);
  const [result, setResult] = useState<number | undefined>(undefined);
  function handleChange(e: ChangeEvent<HTMLInputElement>) {}
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
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
          type="number"
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
      {result && <p>{result}</p>}
    </form>
  );
};

export default Form;
