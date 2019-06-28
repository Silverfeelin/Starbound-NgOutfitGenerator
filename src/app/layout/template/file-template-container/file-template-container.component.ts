import { Component, OnInit, Input } from '@angular/core';
import { IFileTemplate } from '../file-template-interface';

@Component({
  selector: 'app-file-template-container',
  templateUrl: './file-template-container.component.html',
  styleUrls: ['./file-template-container.component.less']
})
export class FileTemplateContainerComponent implements OnInit {
  @Input() title: string;
  @Input() templates: Array<IFileTemplate>;

  constructor() { }

  ngOnInit() {
  }


  fileName(path: string): string {
    const i = path.lastIndexOf('/');
    return i === -1 || i === path.length - 1 ? path : path.substr(i + 1);
  }
}
