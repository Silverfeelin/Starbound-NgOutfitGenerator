import { ErrorHandler } from '@angular/core';
import { NotifierService } from 'angular-notifier';

export class NotifierErrorHandler extends ErrorHandler {

  constructor(private readonly notifierService: NotifierService) {
    super();
  }

  handleError(error) {
    this.notifierService.notify('error', error);
    console.error(error);
  }
}
