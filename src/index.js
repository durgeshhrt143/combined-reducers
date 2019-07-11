import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import counter from "./store/reducers/counterReducer";
import result from "./store/reducers/resultReducer";
import App from "./App";
const rootReducer = combineReducers({
  ctr: counter,
  res: result
});
const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
