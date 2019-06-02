import * as constants from './contants'
import { fromJS } from "immutable";
import Axios from "axios";

export const searchFocus = () => {
  return {
    type: constants.SEARCH_FOCUS
  }
};

export const searchBlur = () => {
  return {
    type: constants.SEARCH_BLUR
  }
};

export const changeList = (data) => {
    return {
      type: constants.CHANGE_LIST,
      data: fromJS(data)
    }
};

export const getTagList = () => {
  return (dispatch) => {
    Axios.get('/api/headerList.json').then((res) => {
      const data = res.data;
      dispatch(changeList(data.data));
    }).catch((e) => {
        console.log(e)
    })
  }
};