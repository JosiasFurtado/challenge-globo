import { call, put } from "redux-saga/effects";
// import api from "../../../services/api";

import { loadSuccess, loadFailure } from "./actions";

export function* load() {
  try {
    // const response = yield call(api.get, "/search/projects/");
    // yield put(loadSuccess(response.data));
    const fakeLogin = [{ logged: true }];
    yield put(loadSuccess(fakeLogin));
  } catch (err) {
    yield put(loadFailure());
  }
}
