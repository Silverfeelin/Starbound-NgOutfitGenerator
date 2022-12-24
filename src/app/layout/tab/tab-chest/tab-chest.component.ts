import { Component } from '@angular/core';
import { ImageHelper } from '@root/helpers/image-helper';
import { ImageModel } from '@root/input/image-input/image-model-interface';
import { TemplateHelper } from '@root/helpers/template-helper';
import { DirectivesHelper } from '@root/helpers/directives-helper';
import { templates } from '@root/helpers/templates';
import { chestFileTemplates } from './chest-file-templates';
import { chestDescriptor } from './chest-descriptor';
import { FileHelper } from '@root/helpers/file-helper';
import { ImageService } from '@root/services/image.service';
import { ClipboardHelper } from '@root/helpers/clipboard-helper';
import { CommandHelper } from '@root/helpers/command-helper';

@Component({
  selector: 'app-tab-chest',
  templateUrl: './tab-chest.component.html',
  styleUrls: ['./tab-chest.component.less']
})
export class TabChestComponent {
  images: { chest?: ImageModel, frontSleeves?: ImageModel, backSleeves?: ImageModel } = {};

  readonly fileTemplates = chestFileTemplates;

  constructor(
    private readonly _imageService: ImageService
  ) {}

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  onDrop(event: DragEvent, slot: string) {
    event.preventDefault();
    const files = event.dataTransfer.files;
    console.log(files);
    this._imageService.fileToImage(files[0]).subscribe({
      next: img => this.imageLoaded(img, slot),
      error: e => this.imageError(e, slot)
    });
  }

  imageLoaded(imageModel: ImageModel, slot: string) {
    this.images[slot] = imageModel;
  }

  imageCleared(slot: string) {
    this.images[slot] = undefined;
  }

  imageError(error: any, slot: string) {
    this.imageCleared(slot);
    console.error(error);
  }

  generateFile(copy?: boolean): void {
    const descriptor = this.generate();
    const json = JSON.stringify(descriptor, undefined, 2);
    copy ? ClipboardHelper.copy(json) : FileHelper.saveText(json, 'outfit-chest.json');
  }

  generateCommand(copy?: boolean): void {
    const descriptor = this.generate();
    const command = CommandHelper.generateCommand(descriptor);
    copy ? ClipboardHelper.copy(command) : FileHelper.saveText(command, 'outfit-chest.txt');
  }

  generate() {
    const descriptor = JSON.parse(JSON.stringify(chestDescriptor));

    let res = '?replace';

    if (this.images.chest) {
      const chest = ImageHelper.toColorTable(this.images.chest.image, { skipTransparent: true });
      const chestTemplate = TemplateHelper.create(43, 43, [
        ['', 'f3'],
        ['f4', 'f5'],
        ['', 'f6'],
        ['', 'f7'],
        ['', ''],
        ['', 'f8'],
      ]);

      const diff = ImageHelper.difference(chestTemplate, chest);
      res += DirectivesHelper.toReplace(diff, true);
    }

    if (this.images.frontSleeves) {
      const front = ImageHelper.toColorTable(this.images.frontSleeves.image, { skipTransparent: true });
      const frontSleeveTemplate = TemplateHelper.create(43, 43, [
        ['', 'a1', 'a2', 'a3', 'a4', 'a5', '', '', 'a6'],
        ['', '', 'b1', 'b2', 'b3', 'b4', 'b5', '', 'b6'],
        ['', '', 'c1', 'c2', 'c3', 'c4', 'c5', '', ''],
        ['', 'd1', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8'],
        ['', '', '', '', '', '', '', '', ''],
        ['', 'e1', 'e2', '', 'e3', 'e4', 'e5', 'e6', 'e7'],
        ['', '', '', 'f1', '', '', '', '', 'f2']
      ]);

      const diff = ImageHelper.difference(frontSleeveTemplate, front);
      res += DirectivesHelper.toReplace(diff, true);
    }

    if (this.images.backSleeves) {
      const back = ImageHelper.toColorTable(this.images.backSleeves.image, { skipTransparent: true });
      const backSleeveTemplate = TemplateHelper.create(43, 43, [
        ['', '60', '61', '62', '63', '64', '', '', '65'],
        ['', '', '66', '67', '68', '69', '6a', '', '6b'],
        ['', '', '6c', '6d', '6e', '6f', '70', '', ''],
        ['', '71', '72', '73', '74', '75', '76', '77', '78'],
        ['', '', '', '', '', '', '', '', ''],
        ['', '79', '7a', '', '7b', '7c', '7d', '7e', '7f'],
        ['', '', '', '80', '', '', '', '', '81']
      ]);

      const diff = ImageHelper.difference(backSleeveTemplate, back);
      res += DirectivesHelper.toReplace(diff, true);
    }

    const full = templates.chest.join('');
    descriptor.parameters.directives = `${full}${res}`;

    return descriptor;
  }
}
