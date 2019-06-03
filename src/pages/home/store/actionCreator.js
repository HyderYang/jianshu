import Axios from "axios";
import * as constants from './constants'

const changHomeData = (result) => {
  return {
    type: constants.CHANGE_HOME_INFO,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList,
  }
};

export const getHomeInfo = () => {
  return (dispatch) => {
    Axios.get('/api/home.json').then((res) => {
      const result = res.data.data;
      dispatch(changHomeData(result))
    }).catch((e) => {
      console.log(e)
    })
  }
};