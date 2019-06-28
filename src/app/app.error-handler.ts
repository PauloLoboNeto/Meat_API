import { Observable } from 'rxjs/Observable';
import { HttpErrorResponse } from '@angular/common/http';

export class ErrorHandler {

  static handlerError(error: HttpErrorResponse | any) {
    let errorMessage: string;
    if (error instanceof HttpErrorResponse) {
      const body = error.error;
      errorMessage = `${error.url}: ${error.statusText} - ${error.statusText || ''} ${body}`;
    } else {
      errorMessage = error.toString();
    }
    console.log(errorMessage);
    return Observable.throw(errorMessage);
  }
}
