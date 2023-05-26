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
  // converter
  defaultFromBase: Bases;
  defaultToBase: Bases;
  showCopyToClipboard: boolean;
  // ? experimental
  allowNegativeNumbers: boolean;
};
