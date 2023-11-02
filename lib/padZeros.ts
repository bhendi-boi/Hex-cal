import { Bases } from "@/types";

export function paddZeros(output: string, outputBase: Bases, noOfBits: number) {
  if (outputBase === "bin") {
    while (output.length < noOfBits) {
      output = "0" + output;
    }
    return output;
  }
  if (outputBase === "oct") {
    return output;
  }
  if (outputBase === "hex") {
    return output;
  }
  return output;
}
