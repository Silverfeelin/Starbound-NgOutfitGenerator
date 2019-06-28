import { Component, OnInit } from '@angular/core';
import { IFileTemplate } from '@root/layout/template/file-template-interface';

@Component({
  selector: 'app-tab-back',
  templateUrl: './tab-back.component.html',
  styleUrls: ['./tab-back.component.less']
})
export class TabBackComponent implements OnInit {

  fileTemplates: Array<IFileTemplate> = [
    {
      asset: 'assets/templates/back/backm.png',
      pdn: 'assets/templates/back/backm.pdn',
      title: 'Back (male)',
      description: 'Back frames file with male body frames.'
    },
    {
      asset: 'assets/templates/back/backf.png',
      pdn: 'assets/templates/back/backf.pdn',
      title: 'Back (female)',
      description: 'Back frames file with female body frames.'
    },
    {
      asset: 'assets/templates/back/back_blank.png',
      title: 'Back (empty)',
      description: 'Empty back frames file.'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
