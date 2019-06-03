import React from 'react'

import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
} from "./style";
import Topic from "./components/Topic";
import Recommend from "./components/Recommend";
import Writer from "./components/Writer";
import List from "./components/List";

class Home extends React.Component{
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className={"banner-img"} src="https://upload.jianshu.io/admin_banners/web_images/4660/224da83c76e01d5deff07e163615921233af5c82.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="test"/>
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
      </HomeWrapper>
    );
  }
}

export default Home;