import * as actionTypes from "../action";
const initialState = {
  result: []
};
const resultReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        result: state.result.concat({ id: new Date(), value: action.result })
      };
    case actionTypes.STORE_DELETE:
      const updateArray = state.result.filter(f => f.id !== action.resultId);

      return {
        ...state,
        result: updateArray
      };
    default:
      return state;
  }
};

export default resultReducer;
