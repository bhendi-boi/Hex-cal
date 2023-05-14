import { Bases } from "@/types";

type Props = {
  from: Bases;
  number: string;
};
export function convertToDec({ from, number }: Props) {
  switch (from) {
    case "bin": {
      return parseInt(number, 2);
    }
    case "oct": {
      return parseInt(number, 8);
    }
    case "dec": {
      return parseInt(number);
    }
    case "hex": {
      return parseInt(number, 16);
    }
  }
}
