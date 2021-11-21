import axios from "axios";
import { QUOTE_DATA } from "../../_constants";

export const quoteData = async () => {
  try {
    const data = await axios.get("/quote").then((response) => response.data);
    return {
      type: QUOTE_DATA,
      data,
    };
  } catch (error) {
    //it will go to error page
    console.log(error);
  }
};
