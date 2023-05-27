"use client";
import React, { ComponentProps, FormEvent, useState } from "react";
import Switch from "../Switch";
import Button from "../Button";
import Toast from "../Toast";
import ChooseBase from "../ChooseBase";
import { useSettings } from "@/hooks/useSettings";
import { Bases } from "@/types";

const Form = () => {
  const [settings, updateSettings] = useSettings();
  const [defaultFrom, setDefaultFrom] = useState<Bases>(
    settings.defaultFromBase
  );
  const [defaultTo, setDefaultTo] = useState<Bases>(settings.defaultToBase);
  const [showCopyToClipboard, setShowCopyToClipboard] = useState(
    settings.showCopyToClipboard
  );
  const [allowNegativeNumbers, setAllowNegativeNumbers] = useState(
    settings.allowNegativeNumbers
  );
  const [addPrefixToResult, setAddPrefixToResult] = useState(
    settings.addPrefixToResult
  );
  const [showStatus, setShowStatus] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    updateSettings({
      defaultFromBase: defaultFrom,
      defaultToBase: defaultTo,
      showCopyToClipboard,
      allowNegativeNumbers,
      addPrefixToResult,
    });
    setShowStatus(true);
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="py-4 space-y-4">
        <fieldset className="px-2">
          <StyledLegend>All</StyledLegend>
          <div className="flex items-center justify-between gap-1 my-2">
            <p>Show copy to clipboard</p>
            <Switch
              srText="Show Copy to clipboard"
              enabled={showCopyToClipboard}
              setEnabled={setShowCopyToClipboard}
            />
          </div>
          <div className="flex items-center justify-between gap-1 mb-2">
            <p>Add prefix to result</p>
            <Switch
              srText="Allow negative numbers"
              enabled={addPrefixToResult}
              setEnabled={setAddPrefixToResult}
            />
          </div>
          <div className="flex items-center justify-between gap-1">
            <p>Allow the use of negative numbers</p>
            <Switch
              srText="Allow negative numbers"
              enabled={allowNegativeNumbers}
              setEnabled={setAllowNegativeNumbers}
            />
          </div>
        </fieldset>
        <fieldset className="px-2">
          <StyledLegend>Converter</StyledLegend>
          <ChooseBase
            settings
            label="Choose default base from which you want to convert a number"
            state={defaultFrom}
            otherState={defaultTo}
            setState={setDefaultFrom}
          />
          <ChooseBase
            settings
            label="Choose default base to which you want to convert a number"
            state={defaultTo}
            otherState={defaultFrom}
            setState={setDefaultTo}
          />
        </fieldset>
        <Button type="submit" variant="converter">
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
    <legend {...rest} className="text-xl font-medium">
      {children}
    </legend>
  );
}
