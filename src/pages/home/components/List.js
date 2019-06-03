import React from 'react'
import { connect } from "react-redux";

import {
  ListInfo,
  ListItem
} from "../style";

class List extends React.Component{
  
  render() {
    const { list } = this.props;
    return (
      <div>
        {
          list.map((item) => {
            return <ListItem key={item.get('id')}>
              <img className={"pic"} src={item.get('imgUrl')} alt={item.get('title')}/>
              <ListInfo>
                <h3 className={"title"} >{item.get('title')}</h3>
                <p className={"desc"}>{item.get('desc')}</p>
              </ListInfo>
            </ListItem>
          })
        }
      </div>
    );
  }
}

const mapState = (state) => {
    return {
      list: state.getIn(['Home', 'articleList'])
    }
};

const mapDispatch = () => {

};

export default connect(mapState, mapDispatch)(List);
