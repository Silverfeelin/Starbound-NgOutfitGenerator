import { IFileTemplate } from '@root/layout/template/file-template-interface';

export const backFileTemplates: Array<IFileTemplate> = [
  {
    asset: 'assets/templates/pants/pantsm.png',
    pdn: 'assets/templates/pants/pantsm.pdn',
    title: 'Pants (male)',
    description: 'Pants frames file with male body frames.'
  },
  {
    asset: 'assets/templates/pants/pantsf.png',
    pdn: 'assets/templates/pants/pantsf.pdn',
    title: 'Pants (female)',
    description: 'Chest frames file with female body frames.'
  },
  {
    asset: 'assets/templates/pants/pants_blank.png',
    title: 'Pants (empty)',
    description: 'Empty pants frames file.'
  }
];
