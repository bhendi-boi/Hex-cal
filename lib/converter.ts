import { Bases } from "@/types";
import { convertToDec } from "./convertToDec";

type Props = {
  from: Bases;
  to: Bases;
  number: string;
};
export function converter({ from, to, number }: Props) {
  const numberAsDec: number = convertToDec({ from, number });
  switch (to) {
    case "bin": {
      return numberAsDec.toString(2);
    }
    case "oct": {
      return numberAsDec.toString(8);
    }
    case "dec": {
      return numberAsDec.toString(10);
    }
    case "hex": {
      return numberAsDec.toString(16);
    }
  }
}
