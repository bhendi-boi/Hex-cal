export function flipBits(num: string) {
  let result: string = "";
  for (let i = 0; i < num.length; i++) {
    result += num[i] === "0" ? "1" : "0";
  }
  return result;
}
