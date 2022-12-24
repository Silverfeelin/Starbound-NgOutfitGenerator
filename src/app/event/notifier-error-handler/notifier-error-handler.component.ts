import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class NotifierErrorHandler extends ErrorHandler {

  constructor() {
    super();
  }

  handleError(error) {
    console.error(error);
  }
}
