import {Injectable} from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import {throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient) {
  }

  get(url: string, params: any) {
    return this.http.get<any>(url, {params: params}).pipe(catchError(HttpService.handleError));
  }

  post(url: string, body: any) {
    return this.http.post<any>(url, body).pipe(catchError(HttpService.handleError));
  }

  private static handleError(error: HttpErrorResponse) {
    return throwError(error);
  }

}
