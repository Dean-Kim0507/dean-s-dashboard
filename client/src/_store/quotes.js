import { QUOTE_DATA } from "../_constants";
const initialState = "";

const reducer = (state = initialState, action) => {
  const { type, data } = action;
  switch (type) {
    case QUOTE_DATA:
      return {
        ...state,
        quotes: data,
      };

    default:
      return state;
  }
};

export default reducer;
