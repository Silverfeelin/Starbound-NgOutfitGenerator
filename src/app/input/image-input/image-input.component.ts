import { Component, Output, EventEmitter } from '@angular/core';
import { ImageHelper } from '@root/helpers/image-helper';
import { Image } from 'upng-js';
import { ImageModel } from './image-model-interface';
import { FileHelper } from '@root/helpers/file-helper';

@Component({
  selector: 'app-image-input',
  templateUrl: './image-input.component.html',
  styleUrls: ['./image-input.component.less']
})
export class ImageInputComponent {
  @Output() readonly imageLoaded = new EventEmitter<ImageModel>();
  @Output() readonly imageError = new EventEmitter<any>();
  @Output() readonly imageCleared = new EventEmitter<void>();

  constructor() { }

  fileChange(event: any) {
    const files: FileList = event.target.files;
    if (!files || files.length === 0) {
      this.imageCleared.emit();
    } else {
      FileHelper.readFileAsDataURL(files[0]).subscribe({
        next: base64 => {
          const image = ImageHelper.fromBase64(base64);
          this.imageLoaded.emit({image, dataUrl: base64});
        },
        error: e => {
            event.target.value = '';
            this.imageError.emit(e);
        }
      });
    }
  }
}
