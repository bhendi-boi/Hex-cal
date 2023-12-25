export function addBinary(num1: string, num2: string) {
  return (BigInt(`0b${num1}`) + BigInt(`0b${num2}`)).toString(2);
}
