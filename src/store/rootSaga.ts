import { put, takeLatest } from "redux-saga/effects";

import { setComments, setPosts } from "./test";

type PostsPayloadTypes = { payload: any[]; type: any[] };
type CommentsPayloadTypes = { payload: any[]; type: any[] };

export function* fetchPostsProducts({ payload }: PostsPayloadTypes) {
    yield put(setPosts(payload));
}

export function* fetchCommentsProducts({ payload }: CommentsPayloadTypes) {
    yield put(setComments(payload));
}
export default function* rootSaga() {
    yield takeLatest("GET_POSTS_REQUESTED", fetchPostsProducts);
    yield takeLatest("GET_COMMENTS_REQUESTED", fetchCommentsProducts);
}
