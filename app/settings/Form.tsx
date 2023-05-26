"use client";
import React, { ComponentProps, useState } from "react";
import ChooseBase from "../ChooseBase";
import Switch from "../Switch";
import { useSettings } from "@/hooks/useSettings";
import { Bases } from "@/types";

const Form = () => {
  const [settings] = useSettings();
  const [defaultFrom, setDefaultFrom] = useState<Bases>(
    settings.defaultFromBase
  );
  const [defaultTo, setDefaultTo] = useState<Bases>(settings.defaultToBase);
  const [showCopyToClipboard, setShowCopyToClipboard] = useState(
    settings.showCopyToClipBoard
  );
  return (
    <form className="px-2 py-4 space-y-4">
      <fieldset>
        <StyledLegend>All</StyledLegend>
        {/* toggle for negative numbers and clipboard */}
        <div className="flex items-center justify-between">
          <p>Show copy to clipboard</p>
          <Switch
            srText="Show Copy to clipboard"
            enabled={showCopyToClipboard}
            setEnabled={setShowCopyToClipboard}
          />
        </div>
      </fieldset>
      <fieldset className="">
        <StyledLegend>Converter</StyledLegend>
        <ChooseBase
          state={defaultFrom}
          label="Choose default base from which you want to convert a number"
          setState={setDefaultFrom}
        />
        <ChooseBase
          state={defaultTo}
          label="Choose default base from which you want to convert a number"
          setState={setDefaultTo}
        />
      </fieldset>
    </form>
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
