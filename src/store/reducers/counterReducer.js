import * as actionTypes from "../action";
const initialState = {
  counter: 0,
  result: []
};
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1
      };
    case actionTypes.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1
      };
    case actionTypes.ADD_COUNTER:
      return {
        ...state,
        counter: state.counter + action.value
      };
    case actionTypes.SUBTRACT_COUNTER:
      return {
        ...state,
        counter: state.counter - action.value
      };

    default:
      return state;
  }
};

export default counterReducer;
