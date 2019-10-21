import { GET_MAKES } from "./../actions/types";

const initialState = {
  makes: [],
  loading: true
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_MAKES:
      return { ...state, makes: payload, loading: false };
    default:
      return { ...state };
  }
}
