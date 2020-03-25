import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http'
import { Injectable }                                  from '@angular/core'
import { Observable }                                  from 'rxjs'
import { catchError, map }                             from 'rxjs/operators'

@Injectable()
export class PostService {

  constructor(
    private http: HttpClient
  ) { }

  getAllPost(): Observable<any> {
    return this.http
      .get("https://jsonplaceholder.typicode.com/posts")
      .pipe(
          map((resp: HttpResponse<any>) => {
              return resp;
          }),
          catchError(this.errorHandler)
      )
  }

  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || "server error.");
  }
}