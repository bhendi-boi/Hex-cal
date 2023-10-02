import { Bases } from "@/types";

export default function findNumberOfBits(inputBase: Bases, input: string) {
  switch (inputBase) {
    case "bin": {
      return input.length.toString();
    }
    case "oct": {
      return (input.length * 3).toString();
    }
    case "dec": {
      return Math.floor(Math.log2(Number(input))).toString();
    }
    case "hex": {
      return (input.length * 4).toString();
    }
  }
}
