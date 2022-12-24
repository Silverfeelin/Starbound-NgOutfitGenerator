import { Injectable } from '@angular/core';
import { FileHelper } from '@root/helpers/file-helper';
import { ImageHelper } from '@root/helpers/image-helper';
import { ImageModel } from '@root/input/image-input/image-model-interface';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor() { }

  fileToImage(file: File): Observable<ImageModel> {
    const subj = new Subject<ImageModel>();
    FileHelper.readFileAsDataURL(file).subscribe({
      next: dataUrl => {
        try {
          const image = ImageHelper.fromBase64(dataUrl);
          const model: ImageModel = { image, dataUrl };
          subj.next(model);
          subj.complete();
        } catch (e) {
          subj.error(e);
        }
      },
      error: (e) => subj.error(e)
    });
    return subj;
  }
}
