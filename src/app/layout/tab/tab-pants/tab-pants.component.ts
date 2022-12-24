import { Component } from '@angular/core';
import { pantsFileTemplates } from './pants-file-templates';
import { NotifierService } from 'angular-notifier';
import { ImageModel } from '@root/input/image-input/image-model-interface';
import { pantsDescriptor, hidingPantsDescriptor } from './pants-descriptor';
import { ImageHelper } from '@root/helpers/image-helper';
import { TemplateHelper } from '@root/helpers/template-helper';
import { templates } from '@root/helpers/templates';
import { DirectivesHelper } from '@root/helpers/directives-helper';
import { FileHelper } from '@root/helpers/file-helper';
import { ImageService } from '@root/services/image.service';
import { ClipboardHelper } from '@root/helpers/clipboard-helper';
import { CommandHelper } from '@root/helpers/command-helper';

@Component({
  selector: 'app-tab-pants',
  templateUrl: './tab-pants.component.html',
  styleUrls: ['./tab-pants.component.less']
})
export class TabPantsComponent {
  imageModel: ImageModel;

  readonly fileTemplates = pantsFileTemplates;

  constructor(
    private readonly _notifierService: NotifierService,
    private readonly _imageService: ImageService
  ) {}

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    const files = event.dataTransfer.files;
    console.log(files);
    this._imageService.fileToImage(files[0]).subscribe({
      next: img => this.imageLoaded(img),
      error: e => this.imageError(e)
    });
  }

  imageLoaded(imageModel: ImageModel) {
    this.imageModel = imageModel;
  }

  imageCleared() {
    this.imageModel = undefined;
  }

  imageError(error: any) {
    this.imageCleared();
    this._notifierService.notify('error', error);
  }

  generateNormalFile(copy?: boolean): void {
    const descriptor = this.generate(pantsDescriptor, templates.pants);
    const json = JSON.stringify(descriptor, undefined, 2);
    copy ? ClipboardHelper.copy(json) : FileHelper.saveText(json, 'outfit-legs.json');
  }

  generateNormalCommand(copy?: boolean): void {
    const descriptor = this.generate(pantsDescriptor, templates.pants);
    const command = CommandHelper.generateCommand(descriptor);
    copy ? ClipboardHelper.copy(command) : FileHelper.saveText(command, 'outfit-legs.json');
  }

  generateHidingFile(copy?: boolean): void {
    const descriptor = this.generate(hidingPantsDescriptor, templates.hidingPants);
    const json = JSON.stringify(descriptor, undefined, 2);
    copy ? ClipboardHelper.copy(json) : FileHelper.saveText(json, 'outfit-legs.json');
  }

  generateHidingCommand(copy?: boolean): void {
    const descriptor = this.generate(hidingPantsDescriptor, templates.hidingPants);
    const command = CommandHelper.generateCommand(descriptor);
    copy ? ClipboardHelper.copy(command) : FileHelper.saveText(command, 'outfit-legs.json');
  }

  generate(descriptor, template) {
    let res = '?replace';

    if (this.imageModel) {
      const pants = ImageHelper.toColorTable(this.imageModel.image, { skipTransparent: true });
      const t = TemplateHelper.create(43, 43, [
        ['', 'a1', 'a2', 'a3', 'a4', 'a5', 'a6', '', 'a7'],
        ['', 'b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8'],
        ['', 'c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8'],
        ['', 'd1', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8'],
        ['', '', '', '', '', '', '', '', ''],
        ['', 'e1', '', '', 'e2', 'e3', 'e4', 'e5', '']
      ]);

      const diff = ImageHelper.difference(t, pants);
      res += DirectivesHelper.toReplace(diff, true);
    }

    const full = template.join('');
    descriptor.parameters.directives = `${full}${res}`;

    return descriptor;
  }
}
