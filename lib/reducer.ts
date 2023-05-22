import { Operations } from "@/types";

type Props = {
  operand1AsDec: string;
  operand2AsDec: string;
  operation: Operations;
};

export function reducer({ operand1AsDec, operand2AsDec, operation }: Props) {
  switch (operation) {
    case "add":
      return Number(operand1AsDec) + Number(operand2AsDec);
    case "sub":
      return Number(operand1AsDec) - Number(operand2AsDec);
    case "mul":
      return Number(operand1AsDec) * Number(operand2AsDec);
    case "div":
      return Number(operand1AsDec) / Number(operand2AsDec);
  }
}
