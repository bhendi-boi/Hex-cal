import { Bases } from "@/types";
import { converter } from "./converter";
import { convertToDec } from "./convertToDec";
import { paddZeros } from "./padZeros";

export function findCompliment(
  isOnes: boolean,
  input: string,
  inputBase: Bases,
  bits: string
) {
  const noOfBits = Number(bits);
  const MAX = Math.pow(2, noOfBits);
  let binaryString = converter({ from: inputBase, to: "bin", number: input });

  if (!isOnes) {
    // padding zeros if necessary
    binaryString = paddZeros(binaryString, "bin", noOfBits);

    const isNegative = binaryString[0] === "1";
    if (!isNegative) {
      const resultAsNumber =
        MAX - convertToDec({ from: "bin", number: binaryString });
      const resultInDesiredFormat = converter({
        from: "dec",
        to: inputBase,
        number: resultAsNumber.toString(),
      });
      return paddZeros(resultInDesiredFormat, inputBase, noOfBits);
    }
  }
  return "1";
}
