import { IFileTemplate } from '@root/layout/template/file-template-interface';

export const chestFileTemplates: Array<IFileTemplate> = [
  {
    asset: 'assets/templates/chest/chestm.png',
    pdn: 'assets/templates/chest/chestm.pdn',
    title: 'Chest (male)',
    description: 'Chest frames file with male body frames.'
  },
  {
    asset: 'assets/templates/chest/chestf.png',
    pdn: 'assets/templates/chest/chestf.pdn',
    title: 'Chest (female)',
    description: 'Chest frames file with female body frames.'
  },
  {
    asset: 'assets/templates/chest/chest_blank.png',
    title: 'Chest (empty)',
    description: 'Empty chest frames file.'
  },
  {
    asset: 'assets/templates/chest/fsleeves.png',
    pdn: 'assets/templates/chest/fsleeves.pdn',
    title: 'Front sleeves',
    description: 'Front sleeves file with arm frames.'
  },
  {
    asset: 'assets/templates/chest/bsleeves.png',
    pdn: 'assets/templates/chest/bsleeves.pdn',
    title: 'Back sleeves',
    description: 'Back sleeves file with arm frames.'
  },
  {
    asset: 'assets/templates/chest/sleeves_blank.png',
    title: 'Sleeves (empty)',
    description: 'Empty sleeves file for front and back frames.'
  }
];
