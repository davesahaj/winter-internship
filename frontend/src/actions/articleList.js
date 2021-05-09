import {
    GET_ARTICLELIST_SUCCESS
  } from "./types";

  export function articleList(formData) {
    console.log("action")
    return {
      type: GET_ARTICLELIST_SUCCESS,
      payload: formData
    }
}