import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { decode, Image, toRGBA8 } from 'upng-js';
import { FileHelper } from '@root/helpers/file-helper';

export interface ImageParseOptions {
  skipTransparent?: boolean;
}

export class ImageHelper {
  static fromBase64(base64: string): Image {
    if (base64.substr(0, 4) === 'data') {
      base64 = base64.substr(22);
    }

    const arr = Uint8Array.from(atob(base64), c => c.charCodeAt(0));
    return decode(arr);
  }

  static fromFile(file: File): Observable<Image> {
    return FileHelper.readFileAsDataURL(file).pipe(map(data => ImageHelper.fromBase64(data)));
  }

  static toColorTable(image: Image, options?: ImageParseOptions): Array<Array<string>> {
    options = options || {};

    const buffer = toRGBA8(image)[0];
    const view = new Uint8Array(buffer);
    const rows = [];

    let i = 0;
    for (let y = 0; y < image.height; y++) {
      rows.push([]);
      for (let x = 0; x < image.width; x++) {
        const pixel = [view[i++], view[i++], view[i++], view[i++]];
        if (options.skipTransparent && pixel[3] === 0) {
          rows[y].push(undefined);
          continue;
        }
        const hex = this.toHex(pixel);
        rows[y].push(hex);
      }
    }

    return rows;
  }

  /**
   * Converts an [r,g,b] or [r,g,b,a] byte array to a hexadecimal color code.
   * Colors are compressed whenever possible.
   */
  static toHex(bytes: Array<number>): string {
    const cp = [...bytes];
    if (cp[3] === 255) { delete cp[3]; }
    const shorten = cp.every(b => (b / 17) % 1 === 0);
    const s = cp.map(n => `0${n.toString(16)}`.slice(shorten ? -1 : -2)).join('');
    return s;
  }

  static difference(from: Array<Array<string>>, to: Array<Array<string>>): { [index: string]: string} {
    const swaps: { [index: string]: string} = {};
    from.forEach((row, y) => {
      row.forEach((a, x) => {
        const b = to[y] && to[y][x];
        if (typeof b !== 'string')  { return; }
        swaps[a] = b;
      });
    });

    return swaps;
  }
}
