import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoaderService } from './loader.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoaderInterceptorService {

  constructor(private loaderService: LoaderService) { }

  intercept(
      req: HttpRequest<any>, 
      next: HttpHandler
    ): Observable<HttpEvent<any>> {

      const cloneReq = req.clone({
        headers: req.headers.set('Authorization', 'Bearer token')
      });

    this.showLoader();
    const idToken = localStorage.getItem("id_token");

    return next.handle(req)
    .pipe(
      tap(
        (event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            this.onEnd();
          }
        },
        (response: HttpEvent<any>) => {
          if(response instanceof HttpErrorResponse){
            console.log(response.message)
            this.onEnd();
            return Observable.throw(response.message);
          }
        }
      )
    );
  }

  private onEnd(): void {
    this.hideLoader();
  }
  private showLoader(): void {
    this.loaderService.show();
  }
  private hideLoader(): void {
    this.loaderService.hide();
  }

}
