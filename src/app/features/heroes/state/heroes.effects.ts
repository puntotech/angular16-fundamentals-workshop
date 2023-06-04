import * as HeroesActions from '../state/heroes.actions';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';

import { HeroService } from '../services/hero.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { inject } from '@angular/core';

@Injectable()
export class HeroesEffects {
  private readonly actions$ = inject(Actions);
  private readonly heroService = inject(HeroService);
  private readonly router = inject(Router)

  loadPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HeroesActions.loadHeroes),
      exhaustMap(() =>
        this.heroService.findAll().pipe(
          map(heroes => HeroesActions.loadHeroesSuccess({ heroes }),
          catchError((error) => of(HeroesActions.loadHeroesFailure({ payload: error })))
          )
        )
      )
    )
  );




  loadPostsFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(HeroesActions.loadHeroesFailure),
        map((error) =>  map(( { payload }) => alert(payload.error.msg)))
      ),
    { dispatch: false }
  );

  /* getPostsByUserId$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostActions.getPostsByUserId),
      exhaustMap(({ userId }) =>
        this.postService.getPostsByUserId(userId).pipe(
          map((posts) => {
            return PostActions.getPostsByUserIdSuccess({
              posts: posts,
            });
          }),
          catchError((error) => {
            return of(PostActions.getPostsByUserIdFailure({ payload: error }));
          })
        )
      )
    )
  );

  getPostsByUserIdFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(PostActions.getPostsByUserIdFailure),
        map((error) => {
          this.errorResponse = error.payload.error;
          this.sharedService.errorLog(error.payload.error);
        })
      ),
    { dispatch: false }
  );

  deletePost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostActions.deletePost),
      exhaustMap(({ postId }) =>
        this.postService.deletePost(postId).pipe(
          map(() => {
            return PostActions.deletePostSuccess({
              postId: postId,
            });
          }),
          catchError((error) => {
            return of(PostActions.deletePostFailure({ payload: error }));
          })
        )
      )
    )
  );

  deletePostFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(PostActions.deletePostFailure),
        map((error) => {
          this.errorResponse = error.payload.error;
          this.sharedService.errorLog(error.payload.error);
        })
      ),
    { dispatch: false }
  );

  getPostById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostActions.getPostById),
      exhaustMap(({ postId }) =>
        this.postService.getPostById(postId).pipe(
          map((post) => {
            return PostActions.getPostByIdSuccess({
              post: post,
            });
          }),
          catchError((error) => {
            return of(PostActions.getPostByIdFailure({ payload: error }));
          })
        )
      )
    )
  );

  getPostByIdFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(PostActions.getPostByIdFailure),
        map((error) => {
          this.errorResponse = error.payload.error;
          this.sharedService.errorLog(error.payload.error);
        })
      ),
    { dispatch: false }
  );

  createPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostActions.createPost),
      exhaustMap(({ post }) =>
        this.postService.createPost(post).pipe(
          map((post) => {
            return PostActions.createPostSuccess({
              post: post,
            });
          }),
          catchError((error) => {
            return of(PostActions.createPostFailure({ payload: error }));
          }),
          finalize(async () => {
            await this.sharedService.managementToast(
              'postFeedback',
              this.responseOK,
              this.errorResponse
            );

            if (this.responseOK) {
              this.router.navigateByUrl('posts');
            }
          })
        )
      )
    )
  );

  createPostSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(PostActions.createPostSuccess),
        map(() => {
          this.responseOK = true;
        })
      ),
    { dispatch: false }
  );

  createPostFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(PostActions.createPostFailure),
        map((error) => {
          this.responseOK = false;
          this.errorResponse = error.payload.error;
          this.sharedService.errorLog(error.payload.error);
        })
      ),
    { dispatch: false }
  );

  updatePost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostActions.updatePost),
      exhaustMap(({ postId, post }) =>
        this.postService.updatePost(postId, post).pipe(
          map((post) => {
            return PostActions.updatePostSuccess({
              postId: postId,
              post: post,
            });
          }),
          catchError((error) => {
            return of(PostActions.updatePostFailure({ payload: error }));
          }),
          finalize(async () => {
            await this.sharedService.managementToast(
              'postFeedback',
              this.responseOK,
              this.errorResponse
            );

            if (this.responseOK) {
              this.router.navigateByUrl('posts');
            }
          })
        )
      )
    )
  );

  updatePostSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(PostActions.updatePostSuccess),
        map(() => {
          this.responseOK = true;
        })
      ),
    { dispatch: false }
  );

  updatePostFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(PostActions.updatePostFailure),
        map((error) => {
          this.responseOK = false;
          this.errorResponse = error.payload.error;
          this.sharedService.errorLog(error.payload.error);
        })
      ),
    { dispatch: false }
  ); */



 /*  likePost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostActions.likePost),
      exhaustMap(({ postId }) =>
        this.postService.likePost(postId).pipe(
          map(() => {
            return PostActions.likePostSuccess({
              postId: postId,
            });
          }),
          catchError((error) => {
            return of(PostActions.likePostFailure({ payload: error }));
          })
        )
      )
    )
  );

  likePostFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(PostActions.likePostFailure),
        map((error) => {
          this.errorResponse = error.payload.error;
          this.sharedService.errorLog(error.payload.error);
        })
      ),
    { dispatch: false }
  );

  dislikePost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostActions.dislikePost),
      exhaustMap(({ postId }) =>
        this.postService.likePost(postId).pipe(
          map(() => {
            return PostActions.dislikePostSuccess({
              postId: postId,
            });
          }),
          catchError((error) => {
            return of(PostActions.dislikePostFailure({ payload: error }));
          })
        )
      )
    )
  );

  dislikePostFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(PostActions.dislikePostFailure),
        map((error) => {
          this.errorResponse = error.payload.error;
          this.sharedService.errorLog(error.payload.error);
        })
      ),
    { dispatch: false }
  ); */
}
