import { Bases } from "@/types";
import { converter } from "./converter";
import { paddZeros } from "./padZeros";
import { flipBits } from "./flipBits";
import { addBinary } from "./addBinary";

export function findCompliment(
  isOnes: boolean,
  input: string,
  inputBase: Bases,
  bits: string
) {
  const noOfBits = Number(bits);
  const MAX = Math.pow(2, noOfBits);
  let binaryString = converter({ from: inputBase, to: "bin", number: input });

  // padding zeros if necessary
  binaryString = paddZeros(binaryString, "bin", noOfBits);

  // flipping bits
  binaryString = flipBits(binaryString);

  if (isOnes) {
    return binaryString;
  }
  // adding 1
  return paddZeros(addBinary(binaryString, "1"), "bin", binaryString.length);
}
