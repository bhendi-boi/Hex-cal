import { Dispatch, SetStateAction } from "react";
import { Bases } from "@/types";

export function swapBases(
  firstVal: Bases,
  setBase1: Dispatch<SetStateAction<Bases>>,
  secondVal: Bases,
  setBase2: Dispatch<SetStateAction<Bases>>
) {
  const firstvalue = firstVal;
  const secondvalue = secondVal;
  setBase1(secondvalue);
  setBase2(firstvalue);
}
