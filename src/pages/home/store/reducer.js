import * as constants from './constants'
import {fromJS} from 'immutable'

const defaultStare = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
});

export default (state = defaultStare, action) => {
  switch (action.type) {
    case constants.CHANGE_HOME_INFO:
      return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList),
      });
    default:
      return state;
  }
}