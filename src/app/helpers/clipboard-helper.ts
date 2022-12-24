export class ClipboardHelper {
  static copy(text: string): void {
    navigator.clipboard.writeText(text);
  }
}
