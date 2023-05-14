import { Bases } from "@/types";

export function generateRegex(base: Bases | undefined) {
  switch (base) {
    case "bin": {
      return {
        pattern: "^[0-9]*$",
        inputMode: "numeric",
      };
    }
    case "oct": {
      return { pattern: "^[0-9]*$", inputMode: "numeric" };
    }
    case "dec": {
      return { pattern: "^[0-9]*$", inputMode: "decimal" };
    }
    case "hex": {
      return { pattern: "/(0x)?[0-9a-f]+/i", inputMode: "text" };
    }
    default: {
      return {
        pattern: undefined,
        inputMode: undefined,
      };
    }
  }
}
