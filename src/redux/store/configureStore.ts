import { initMerchantsState } from "./../reducers/merchants-reducer";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { rootSagas } from "sagas";
import { AppState } from "types";
import { rootReducer } from "../reducers";

const init: AppState = {
  merchants: initMerchantsState,
};

export function store(initialState: AppState = init) {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [sagaMiddleware];

  return {
    ...createStore(
      rootReducer,
      initialState,
      composeWithDevTools(applyMiddleware(...middleware))
    ),
    runSaga: sagaMiddleware.run(rootSagas),
  };
}
