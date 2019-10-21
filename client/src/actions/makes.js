import axios from "axios";
import { GET_MAKES } from "./types";

export const getMakes = () => async dispatch => {
  try {
    const res = await axios.get("api/makes");
    dispatch({
      type: GET_MAKES,
      payload: res.data
    });
  } catch (error) {
    console.error(error);
  }
};
