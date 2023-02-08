import { composeWithDevTools } from "redux-devtools-extension";
import { createBrowserHistory } from "history";
import { createStore, applyMiddleware } from "redux";
import { routerMiddleware } from "connected-react-router";
import createSagaMiddleware from "redux-saga";
import thunkMiddleware from 'redux-thunk';
import reducers from "../reducers";
import rootSaga from "../sagas";

const history = createBrowserHistory({});

const sagaMiddleware = createSagaMiddleware();
const reduxRouterMiddleware = routerMiddleware(history);
const thunkMiddleWares = [thunkMiddleware];

const enhancers = composeWithDevTools(
      applyMiddleware(sagaMiddleware),
      applyMiddleware(reduxRouterMiddleware),
      applyMiddleware(...thunkMiddleWares)
    );

const store = createStore(reducers(history), enhancers);

sagaMiddleware.run(rootSaga);

export default store;
export { history };