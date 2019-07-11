// const redux = require("redux");
// const createStore = redux.createStore;
// //reducer
// const initialState = {
//   count: 0
// };
// const rootReducer = (state = initialState, action) => {
//   if (action.type === "INC_COUNTER") {
//     return {
//       ...state,
//       count: state.count + 1
//     };
//   }
//   if (action.type === "ADD_COUNTER") {
//     return {
//       ...state,
//       count: state.count + action.value
//     };
//   }
//   return state;
// };
// //store
// const store = createStore(rootReducer);
// console.log(store.getState());
// //subscribe
// store.subscribe(() => {
//   console.log("subcribe", store.getState());
// });
// //dispatch Action
// store.dispatch({ type: "INC_COUNTER" });
// store.dispatch({ type: "ADD_COUNTER", value: 10 });
// console.log(store.getState());
