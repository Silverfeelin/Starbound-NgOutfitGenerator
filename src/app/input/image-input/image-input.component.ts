import { Component, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { ImageHelper } from '@root/helpers/image-helper';
import { Image } from 'upng-js';
import { ImageModel } from './image-model-interface';
import { FileHelper } from '@root/helpers/file-helper';
import { ImageService } from '@root/services/image.service';

@Component({
  selector: 'app-image-input',
  templateUrl: './image-input.component.html',
  styleUrls: ['./image-input.component.less']
})
export class ImageInputComponent {
  @Output() readonly imageLoaded = new EventEmitter<ImageModel>();
  @Output() readonly imageError = new EventEmitter<any>();
  @Output() readonly imageCleared = new EventEmitter<void>();

  @ViewChild('input', { static: true }) input: ElementRef;

  constructor(
    private readonly _imageService: ImageService
  ) { }

  clearOld(): void {
    this.input.nativeElement.value = '';
  }

  fileChange(event: any) {
    const files: FileList = event.target.files;
    if (!files || files.length === 0) {
      this.imageCleared.emit();
    } else {
      this._imageService.fileToImage(files[0]).subscribe({
        next: img => this.imageLoaded.emit(img),
        error: e => {
          event.target.value = '';
          this.imageError.emit(e);
        }
      });
    }
  }
}
