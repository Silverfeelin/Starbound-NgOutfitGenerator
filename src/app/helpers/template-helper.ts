import { ImageHelper } from './image-helper';

export class TemplateHelper {
  /**
   * Creates a gradient template.
   * @description Each frame is a gradient from `[0, 0]` to `[frameWidth, frameHeight]`.
   * The gradient colors are defined as a hexadecimal color formatted `xxidyy`.
   * Identifiers `xx` and `yy` increment to the right and upwards.
   * Identifier `id` is used from parameter `frames`.
   * @param frameWidth Width of each frame in the template
   * @param frameHeight Height of each frame in the template.
   * @param frames Two-dimensional array `[y][x]` representing the frames to generate. Each value is the identifier of that frame 
   * @example
   * create(2, 2, [
   *   [true, false]
   * ]);
   */
  static create(frameWidth: number, frameHeight: number, frames: Array<Array<string>>): Array<Array<string>> {
    const verticalFrames = frames.length;
    const horizontalFrames = frames[0].length;

    const v = verticalFrames * frameHeight;
    // Build arrray
    const rows = [];
    for (let i = 0; i < v; i++) {
      rows.push([]);
    }

    // For every frame
    for (let w = 0; w < horizontalFrames; w++) {
      for (let h = 0; h < verticalFrames; h++) {
        // Frame identifier
        const id = frames[verticalFrames - 1 - h][w];
        if (!id) { continue; }

        // For every pixel in frame
        for (let x = 0; x < frameWidth; x++) {
          for (let y = 0; y < frameHeight; y++) {
            const pixel = ImageHelper.toHex([x, parseInt(id, 16), y, 0]);
            rows[v - 1 - (h * frameHeight + y)][w * frameWidth + x] = pixel;
          }
        }
      }
    }

    return rows;
  }
}
