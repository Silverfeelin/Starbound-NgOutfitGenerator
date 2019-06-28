export class DirectivesHelper {
  static toReplace(palette: { [index: string]: string }, omitReplace = false): string {
    let s = omitReplace ? '' : '?replace';

    Object.keys(palette).forEach(key => {
      s += `;${key}=${palette[key]}`;
    });

    return s;
  }
}
