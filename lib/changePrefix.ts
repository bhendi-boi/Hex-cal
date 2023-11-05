export function changePrefix(num: string) {
  if (num.toUpperCase() === num) {
    return num.toLowerCase();
  }
  return num.toUpperCase();
}
