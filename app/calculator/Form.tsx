"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import ChooseOperation from "./ChooseOperation";
import ChooseBase from "../ChooseBase";
import Input from "../Input";
import Button from "../Button";
import { generateRegex } from "@/lib/generateRegex";
import { converter } from "@/lib/converter";
import { reducer } from "@/lib/reducer";
import { Bases, InputModeTypes, Operations } from "@/types";

const Form = () => {
  const [operand1, setOperand1] = useState("");
  const [operand1Base, setOperand1Base] = useState<Bases>("bin");
  const [operand2, setOperand2] = useState("");
  const [operand2Base, setOperand2Base] = useState<Bases>("bin");
  const [operation, setOperation] = useState<Operations>("div");
  const [result, setResult] = useState("");

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
        {/* // TODO add a button which can be used to collapse and show ChooseBase */}
        <div className="px-2 pb-4">
          <label htmlFor="operand1">Operand 1</label>
          <ChooseBase
            label="Choose base for operand1"
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
          <label htmlFor="operand2">Operand 2</label>
          <ChooseBase
            label="Choose base for operand2"
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
      {result && (
        <div>
          <h2>Result: </h2>
          <p>{result}</p>
        </div>
      )}
    </>
  );
};

export default Form;
