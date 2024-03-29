"use client";
import React, { ComponentProps, FormEvent, useState } from "react";
import Switch from "../Switch";
import Button from "../Button";
import Toast from "../Toast";
import ChooseBase from "../ChooseBase";
import { useSettings } from "@/hooks/useSettings";
import { Bases } from "@/types";
import ChooseOperation from "../ChooseOperation";

const Form = () => {
  const [settings, updateSettings] = useSettings();
  const [defaultOperand1Base, setDefaultOperand1Base] = useState(
    settings.defaultOperand1Base
  );
  const [defaultOperand2Base, setDefaultOperand2Base] = useState(
    settings.defaultOperand2Base
  );
  const [defaultOperation, setDefaultOperation] = useState(
    settings.defaultOperation
  );
  const [defaultFrom, setDefaultFrom] = useState<Bases>(
    settings.defaultFromBase
  );
  const [defaultTo, setDefaultTo] = useState<Bases>(settings.defaultToBase);
  const [darkMode, setDarkMode] = useState(settings.darkMode);
  const [showCopyToClipboard, setShowCopyToClipboard] = useState(
    settings.showCopyToClipboard
  );
  const [allowNegativeNumbers, setAllowNegativeNumbers] = useState(
    settings.allowNegativeNumbers
  );
  const [showFullText, setShowFullText] = useState(settings.showFullText);
  const [addPrefixToResult, setAddPrefixToResult] = useState(
    settings.addPrefixToResult
  );
  const [changePrefix, setChangePrefix] = useState(settings.changePrefix);
  const [showStatus, setShowStatus] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    updateSettings({
      defaultOperand1Base,
      defaultOperand2Base,
      defaultOperation,
      showFullText,
      darkMode,
      defaultFromBase: defaultFrom,
      defaultToBase: defaultTo,
      showCopyToClipboard,
      allowNegativeNumbers,
      addPrefixToResult,
      changePrefix,
    });
    setShowStatus(true);
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="px-2 py-4">
        <fieldset className="my-4">
          <StyledLegend>All</StyledLegend>
          <div className="flex items-center justify-between gap-1 my-2">
            <p>Show copy to clipboard</p>
            <Switch
              srText="Show Copy to clipboard"
              enabled={showCopyToClipboard}
              setEnabled={setShowCopyToClipboard}
            />
          </div>
          <div className="flex items-center justify-between gap-1 my-2">
            <p>Use dark theme</p>
            <Switch
              srText="Use dark theme"
              enabled={darkMode}
              setEnabled={setDarkMode}
            />
          </div>
          <div className="flex items-center justify-between gap-1 my-2">
            <p>Allow the use of negative numbers</p>
            <Switch
              srText="Allow negative numbers"
              enabled={allowNegativeNumbers}
              setEnabled={setAllowNegativeNumbers}
            />
          </div>
          <div className="flex items-center justify-between gap-1 my-2">
            <p>Show full text in while choosing base and operation</p>
            <Switch
              srText="Show full text in while choosing base and operation"
              enabled={showFullText}
              setEnabled={setShowFullText}
            />
          </div>
          <div className="flex items-center justify-between gap-1 my-2">
            <p>Add prefix to result</p>
            <Switch
              srText="Allow negative numbers"
              enabled={addPrefixToResult}
              setEnabled={setAddPrefixToResult}
            />
          </div>
          <div className="flex items-center justify-between gap-1">
            <p>Change prefix after a result is found ?</p>
            <Switch
              srText="Change prefix after a result is found ?"
              enabled={changePrefix}
              setEnabled={setChangePrefix}
            />
          </div>
        </fieldset>
        <div className="my-4">
          <StyledLegend>Calculator</StyledLegend>
          <ChooseBase
            variant="single"
            isSettings
            label="Choose default base for operand1."
            state={defaultOperand1Base}
            setState={setDefaultOperand1Base}
          />
          <ChooseBase
            variant="single"
            isSettings
            label="Choose default base for operand2."
            state={defaultOperand2Base}
            setState={setDefaultOperand2Base}
          />
          <ChooseOperation
            label="Choose default operation which you want to perform."
            state={defaultOperation}
            setState={setDefaultOperation}
          />
        </div>
        <div className="my-4">
          <StyledLegend>Converter</StyledLegend>
          <ChooseBase
            variant="double"
            isSettings
            label="Choose default base from which you want to convert a number"
            state={defaultFrom}
            setState={setDefaultFrom}
            otherState={defaultTo}
            setOtherState={setDefaultTo}
          />
          <ChooseBase
            variant="double"
            isSettings
            label="Choose default base to which you want to convert a number"
            state={defaultTo}
            setState={setDefaultTo}
            otherState={defaultFrom}
            setOtherState={setDefaultFrom}
          />
        </div>
        <Button type="submit" variant="converter" className="my-8">
          Save Changes
        </Button>
      </form>
      <Toast
        state={showStatus}
        setState={setShowStatus}
        message="Changes saved successfully 🥳"
      />
    </>
  );
};

export default Form;

function StyledLegend({ children, ...rest }: ComponentProps<"legend">) {
  return (
    <h2
      {...rest}
      className="text-xl font-medium text-subheadingText dark:text-darkSubheadingText"
    >
      {children}
    </h2>
  );
}
