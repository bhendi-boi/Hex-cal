import { Bases } from "@/types";

type Props = {
  result: string;
  base: Bases;
};
export function addPrefix({ result, base }: Props) {
  switch (base) {
    case "bin":
      return "0b" + result;
    case "oct":
      return "0o" + result;
    case "dec":
      return result;
    case "hex":
      return "0x" + result;
  }
}
