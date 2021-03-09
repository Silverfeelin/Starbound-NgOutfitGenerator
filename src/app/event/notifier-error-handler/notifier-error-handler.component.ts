import { ErrorHandler, Injectable } from '@angular/core';
import { NotifierService } from 'angular-notifier';

@Injectable()
export class NotifierErrorHandler extends ErrorHandler {

  constructor(private readonly notifierService: NotifierService) {
    super();
  }

  handleError(error) {
    this.notifierService.notify('error', error);
    console.error(error);
  }
}
