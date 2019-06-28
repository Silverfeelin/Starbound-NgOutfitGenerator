import { Component, OnInit } from '@angular/core';
import { IFileTemplate } from '@root/layout/template/file-template-interface';
import { backFileTemplates } from './back-file-templates';
import { ImageModel } from '@root/input/image-input/image-model-interface';
import { backDescriptor } from './back-descriptor';
import { ImageHelper } from '@root/helpers/image-helper';
import { TemplateHelper } from '@root/helpers/template-helper';
import { DirectivesHelper } from '@root/helpers/directives-helper';
import { FileHelper } from '@root/helpers/file-helper';
import { NotifierService } from 'angular-notifier';
import { templates } from '@root/helpers/templates';

@Component({
  selector: 'app-tab-back',
  templateUrl: './tab-back.component.html',
  styleUrls: ['./tab-back.component.less']
})
export class TabBackComponent {
  imageModel: ImageModel;

  readonly fileTemplates = backFileTemplates;

  constructor(private readonly notifierService: NotifierService) {}

  imageLoaded(imageModel: ImageModel) {
    this.imageModel = imageModel;
  }

  imageCleared() {
    this.imageModel = undefined;
  }

  imageError(error: any) {
    this.imageCleared();
    this.notifierService.notify('error', error);
  }

  generate() {
    const descriptor = JSON.parse(JSON.stringify(backDescriptor));
    let res = '?replace';

    if (this.imageModel) {
      const pants = ImageHelper.toColorTable(this.imageModel.image, { skipTransparent: true });
      const t = TemplateHelper.create(43, 43, [
        ['', 'a1', 'a2', 'a3', 'a4', 'a5', 'a6', '', 'a7'],
        ['', 'b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8'],
        ['', 'c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8'],
        ['', 'd1', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8'],
        ['', '', '', '', '', '', '', '', ''],
        ['', 'e1', '', '', 'e2', 'e3', 'e4', 'e5', ''],
        ['', 'f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8']
      ]);

      const diff = ImageHelper.difference(t, pants);
      res += DirectivesHelper.toReplace(diff, true);
    }

    const full = templates.back.join('');
    descriptor.parameters.directives = `${full}${res}`;

    FileHelper.saveText(JSON.stringify(descriptor, undefined, 2), 'outfit-legs.json');
  }
}
