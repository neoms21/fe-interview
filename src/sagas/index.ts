import { all } from "redux-saga/effects";
// import {
//  userActions, userApi, userReducer, usersWatchers
// } from "./users";
import { listsWatchers } from "./watchers";
// import api from "./api";

function* rootSagas() {
  yield all([...listsWatchers]);
}

export { rootSagas };
