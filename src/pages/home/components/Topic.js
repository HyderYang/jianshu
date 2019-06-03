import React from 'react'
import { connect } from "react-redux";

import {
  TopicWrapper,
  TopicItem
} from "../style";

class Topic extends React.Component{

  render() {
    const {topicList} = this.props;
    return (
      <TopicWrapper>
        {
          topicList.map((item) => {
            return <TopicItem key={item.get('id')}>
              <img
                className={"topic-pic"}
                src={item.get('imgUrl')} alt={item.get('title')}
              />
              {item.get('title')}
            </TopicItem>
          })
        }
      </TopicWrapper>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    topicList: state.getIn(['Home', 'topicList'])
  }
};

const mapDispatchToProps = () => {
  return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(Topic);
