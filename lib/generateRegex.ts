import { Bases } from "@/types";

export function generateRegex(base: Bases): {
  pattern: string;
  inputMode: string;
} {
  switch (base) {
    case "bin": {
      return { pattern: "^[01]+$", inputMode: "numeric" };
    }
    case "oct": {
      return { pattern: "^[0-7]+$", inputMode: "numeric" };
    }
    case "dec": {
      return { pattern: "^[0-9]+$", inputMode: "decimal" };
    }
    case "hex": {
      return { pattern: "^[0-9A-Fa-f]+$", inputMode: "text" };
    }
  }
}
