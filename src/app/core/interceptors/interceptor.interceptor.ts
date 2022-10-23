import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize } from "rxjs/operators";
import { LoaderService } from 'src/app/commons/components/loader/commons/service/loader.service';

@Injectable()
export class Interceptor implements HttpInterceptor {

  constructor(
    private loaderService: LoaderService,
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loaderService.showLoader()
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log(error);
        
        let errorMsg = ''
        if(error.error instanceof ErrorEvent) {
          errorMsg = `Error: ${error.message}`
          console.log(errorMsg)
        } else {
          errorMsg = `Error Code: ${error.error.status},  Message: ${error.message}`
          console.log(errorMsg)
        }
        return throwError(errorMsg)
      }),
      finalize(() => this.loaderService.closeLoader())
    )
  }
}
