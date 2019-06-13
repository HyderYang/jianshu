import React from 'react'
import {connect} from "react-redux";

import {HomeLeft, HomeRight, HomeWrapper,} from "./style";
import Topic from "./components/Topic";
import Recommend from "./components/Recommend";
import Writer from "./components/Writer";
import List from "./components/List";
import {creator} from './store';

class Home extends React.Component {
  componentDidMount() {
    this.props.changeHomeData();
  }

  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className={"banner-img"}
               src="https://upload.jianshu.io/admin_banners/web_images/4660/224da83c76e01d5deff07e163615921233af5c82.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
               alt="test"/>
          <Topic/>
          <List/>
        </HomeLeft>
        <HomeRight>
          <Recommend/>
          <Writer/>
        </HomeRight>
      </HomeWrapper>
    );
  }
}

const mapState = (state) => {
  return {}
};

const mapDispatch = (dispatch) => {
  return {
    changeHomeData() {
      dispatch(creator.getHomeInfo())
    },
  }
};


export default connect(mapState, mapDispatch)(Home);
