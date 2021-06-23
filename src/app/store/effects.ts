import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { mergeMap, map, catchError } from 'rxjs/operators'
import { of } from 'rxjs'
import { PostService } from "src/services/posts.service";
import { GET_FILTERS, SET_FILTERS } from './actions'

class AllOk {
  type: string = 'OK';
  payload: any;
  constructor(payload: any) {
    this.payload = payload
  }

}
@Injectable()
export class PostsEffects {
  loadPosts$ = createEffect(() => this.actions.pipe(
    ofType(GET_FILTERS),
    mergeMap(() => this.http.getFilters()
      .pipe(
        map((data: any) => ({ type: SET_FILTERS, payload: data })),
        catchError((err: any) => of(new AllOk(err))
        ))
    )))

  constructor(private http: PostService, private actions: Actions) { }

}
