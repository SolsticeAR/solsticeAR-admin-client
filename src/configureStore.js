import { createBrowserHistory } from "history";
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { routerMiddleware } from "connected-react-router";

import reducer from "./reducers";

export const history = createBrowserHistory();

export default function configureStore(initialState) {
  // Note: passing middleware as the last argument to createStore requires redux@>=3.1.0
  const sagaMiddleware = createSagaMiddleware();

  // then run the saga
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  // render the application
  return {
    ...createStore(
      reducer(history),
      composeEnhancers(
        applyMiddleware(routerMiddleware(history), sagaMiddleware)
      )
    ),
    runSaga: sagaMiddleware.run
  };
}
