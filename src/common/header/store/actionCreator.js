import * as constants from './contants'
import {fromJS} from "immutable";
import Axios from "axios";

const changeList = (data) => {
  return {
    type: constants.CHANGE_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10)
  }
};

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

export const handleMouseIn = () => {
  return {
    type: constants.MOUSE_IN
  }
};

export const handleMouseLeave = () => {
  return {
    type: constants.MOUSE_IN
  }
};

export const handleChangePage = (page) => {
  return {
    type: constants.CHANGE_PAGE,
    page
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