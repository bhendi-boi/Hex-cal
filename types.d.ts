export type Bases = "bin" | "oct" | "dec" | "hex";

export type Operations = "add" | "sub" | "mul" | "div";

export type InputModeTypes =
  | "numeric"
  | "search"
  | "text"
  | "email"
  | "tel"
  | "url"
  | "none"
  | "decimal"
  | undefined;

export type UserSettings = {
  // all
  showCopyToClipboard: boolean;
  addPrefixToResult: boolean;
  // ? experimental
  allowNegativeNumbers: boolean;

  // calculator
  defaultOperand1Base: Bases;
  defaultOperand2Base: Bases;
  defaultOperation: Operations;

  // converter
  defaultFromBase: Bases;
  defaultToBase: Bases;
};
