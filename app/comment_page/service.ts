import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http'
import { Injectable }                                  from '@angular/core'
import { Observable }                                  from 'rxjs'
import { catchError, map }                             from 'rxjs/operators'

@Injectable()
export class CommentService {

  constructor(
    private http: HttpClient
  ) { }

  getCommentsOfPost(post_id): Observable<any> {
    return this.http
      .get("https://jsonplaceholder.typicode.com/comments?postId=" + `${post_id}`)
      .pipe(
          map((resp: HttpResponse<any>) => {
              return resp;
          }),
          catchError(this.errorHandler)
      )
  }

  getSinglePost(post_id): Observable<any> {
    return this.http
      .get("https://jsonplaceholder.typicode.com/posts/" + `${post_id}`)
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