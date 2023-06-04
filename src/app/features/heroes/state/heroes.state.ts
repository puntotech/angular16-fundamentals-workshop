import { Action, createReducer, on } from '@ngrx/store';
import { loadHeroes, loadHeroesFailure, loadHeroesSuccess } from './heroes.actions';

import { Hero } from '../interfaces/hero.interface';

export interface HeroesState {
  ids: string[] | number[];
  entities: { [id: number]: Hero };
  loading: boolean;
  loaded: boolean;
  error: any;
}

export const initialState: HeroesState = {
  ids: [],
  entities: {},
  loading: false,
  loaded: false,
  error: null,
};

export function heroesReducer(
  state: HeroesState | undefined,
  action: Action
): HeroesState
 {
  const reducer = createReducer(
  initialState,
  on(loadHeroes, (state) => ({
    ...state,
    loading: true,
    loaded: false,
    error: null,
  })),
  on(loadHeroesSuccess, (state, action) => ({
    ...state,
    entities: action.heroes.reduce((heroes, hero) => ({ ...heroes, [hero.id]: hero }), {}),
    ids: action.heroes.map(hero => hero.id),
    loading: false,
    loaded: true,
    error: null,
  })),
  on(loadHeroesFailure, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: { payload },
  })),
 /* on(deletePost, (state) => ({
    ...state,
    loading: true,
    loaded: false,
    error: null,
  })),
  on(deletePostSuccess, (state, { postId }) => ({
    ...state,
    posts: [...state.posts.filter((post) => post.postId !== postId)],
    loading: false,
    loaded: true,
    error: null,
  })),
  on(deletePostFailure, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: { payload },
  })),
  on(getPostById, (state) => ({
    ...state,
    loading: true,
    loaded: false,
    error: null,
  })),
  on(getPostByIdSuccess, (state, action) => ({
    ...state,
    post: action.post,
    loading: false,
    loaded: true,
    error: null,
  })),
  on(getPostByIdFailure, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: { payload },
  })),
  on(createPost, (state) => ({
    ...state,
    loading: true,
    loaded: false,
    error: null,
  })),
  on(createPostSuccess, (state, action) => ({
    ...state,
    post: action.post,
    loading: false,
    loaded: true,
    error: null,
  })),
  on(createPostFailure, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: { payload },
  })),
  on(updatePost, (state) => ({
    ...state,
    loading: true,
    loaded: false,
    error: null,
  })),
  on(updatePostSuccess, (state, action) => ({
    ...state,
    post: action.post,
    loading: false,
    loaded: true,
    error: null,
  })),
  on(updatePostFailure, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: { payload },
  })),
  on(getPosts, (state) => ({
    ...state,
    loading: true,
    loaded: false,
    error: null,
  })),
  on(getPostsSuccess, (state, action) => ({
    ...state,
    posts: action.posts,
    loading: false,
    loaded: true,
    error: null,
  })),
  on(getPostsFailure, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: { payload },
  })),
  on(likePost, (state) => ({
    ...state,
    loading: true,
    loaded: false,
    error: null,
  })),
  on(likePostSuccess, (state, action) => ({
    ...state,
    posts: [
      ...state.posts.map((post) => {
        if (post.postId === action.postId) {
          return { ...post, num_likes: post.num_likes + 1 };
        } else {
          return post;
        }
      }),
    ],
    loading: false,
    loaded: true,
    error: null,
  })),
  on(likePostFailure, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: { payload },
  })),
  on(dislikePost, (state) => ({
    ...state,
    loading: true,
    loaded: false,
    error: null,
  })),
  on(dislikePostSuccess, (state, action) => ({
    ...state,
    posts: [
      ...state.posts.map((post) => {
        if (post.postId === action.postId) {
          return { ...post, num_dislikes: post.num_dislikes + 1 };
        } else {
          return post;
        }
      }),
    ],
    loading: false,
    loaded: true,
    error: null,
  })),
  on(dislikePostFailure, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: { payload },
  })) */
);
  return reducer(state, action);
}

