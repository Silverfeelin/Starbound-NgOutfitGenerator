import { Component, OnInit, AfterViewInit } from '@angular/core';
import { IFileTemplate } from '@root/layout/template/file-template-interface';
import { pantsTemplates } from './pants-templates';

@Component({
  selector: 'app-tab-pants',
  templateUrl: './tab-pants.component.html',
  styleUrls: ['./tab-pants.component.less']
})
export class TabPantsComponent implements OnInit, AfterViewInit {

  templates = pantsTemplates;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
  }

  click() {
    throw new Error("o noes");
  }
}
