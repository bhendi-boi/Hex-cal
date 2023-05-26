export function copyToClipboard(str: string) {
  window.navigator.clipboard.writeText(str);
}
