import { Bases } from "@/types";

export function findNumberOfBits(inputBase: Bases, input: string) {
  switch (inputBase) {
    case "bin": {
      return input.length.toString();
    }
    case "oct": {
      return (input.length * 3).toString();
    }
    case "dec": {
      return Math.ceil(Math.log2(Number(input))).toString();
    }
    case "hex": {
      return (input.length * 4).toString();
    }
  }
}
